import { useState } from '@wordpress/element';
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  RangeControl,
  Button,
} from '@wordpress/components';
import { t } from './i18n';

const ICON_OPTIONS = [
  { label: '📍 Marcador Padrão (Location Dot)', value: 'fa-solid fa-location-dot' },
  { label: 'ℹ️ Informação (Circle Info)', value: 'fa-solid fa-circle-info' },
  { label: '⭐ Estrela (Star)', value: 'fa-solid fa-star' },
  { label: '🎯 Alvo / Mira (Crosshairs)', value: 'fa-solid fa-crosshairs' },
  { label: '💡 Lâmpada (Lightbulb)', value: 'fa-solid fa-lightbulb' },
  { label: '❓ Pergunta (Circle Question)', value: 'fa-solid fa-circle-question' },
  { label: '⚠️ Alerta (Triangle Exclamation)', value: 'fa-solid fa-triangle-exclamation' },
  { label: '🔍 Lupa (Magnifying Glass)', value: 'fa-solid fa-magnifying-glass' },
  { label: '🏷️ Etiqueta (Tag)', value: 'fa-solid fa-tag' },
  { label: '❤️ Coração (Heart)', value: 'fa-solid fa-heart' },
];

const COLOR_PRESETS = [
  { label: 'Azul', value: '#0d6efd' },
  { label: 'Verde', value: '#198754' },
  { label: 'Vermelho', value: '#dc3545' },
  { label: 'Amarelo / Dourado', value: '#ffc107' },
  { label: 'Roxo', value: '#6f42c1' },
  { label: 'Ciano', value: '#0dcaf0' },
  { label: 'Laranja', value: '#fd7e14' },
];

export default function Edit({ attributes, setAttributes }) {
  const {
    mediaType = 'image-hotspots',
    mainImage = '',
    layers = [],
    hotspots = [],
    showQuizEvaluation = false,
    sliderValue = 50,
    panoramaAutoRotate = true,
  } = attributes;

  const [selectedSpotIndex, setSelectedSpotIndex] = useState(
    hotspots.length > 0 ? 0 : null
  );

  const blockProps = useBlockProps({
    className: `wp-block-luiz0067-media-hotspot editor-view mode-${mediaType}`,
  });

  // Handle direct click on image to place new hotspot
  const handleImageClick = (e) => {
    if (mediaType !== 'image-hotspots') return;
    if (!mainImage) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round((((e.clientX - rect.left) / rect.width) * 100) * 10) / 10;
    const y = Math.round((((e.clientY - rect.top) / rect.height) * 100) * 10) / 10;

    const newSpot = {
      id: `spot-${Date.now()}`,
      x,
      y,
      title: `${t('settings.hotspotItem', { index: hotspots.length + 1 })}`,
      description: '',
      isCorrectTarget: true,
      feedback: '',
      icon: 'fa-solid fa-location-dot',
      color: '#0d6efd',
    };

    const updated = [...hotspots, newSpot];
    setAttributes({ hotspots: updated });
    setSelectedSpotIndex(updated.length - 1);
  };

  // Update specific hotspot field
  const updateHotspot = (index, field, value) => {
    const updated = [...hotspots];
    updated[index] = { ...updated[index], [field]: value };
    setAttributes({ hotspots: updated });
  };

  // Delete hotspot
  const deleteHotspot = (index) => {
    const updated = hotspots.filter((_, i) => i !== index);
    setAttributes({ hotspots: updated });
    if (selectedSpotIndex === index) {
      setSelectedSpotIndex(updated.length > 0 ? 0 : null);
    } else if (selectedSpotIndex > index) {
      setSelectedSpotIndex(selectedSpotIndex - 1);
    }
  };

  // Add new layer
  const addLayer = (url = '', title = '') => {
    const updated = [
      ...layers,
      {
        url,
        title: title || `${t('settings.layerTitle', { index: layers.length + 1 })}`,
      },
    ];
    setAttributes({ layers: updated });
  };

  // Update layer
  const updateLayer = (index, field, value) => {
    const updated = [...layers];
    updated[index] = { ...updated[index], [field]: value };
    setAttributes({ layers: updated });
  };

  // Delete layer
  const deleteLayer = (index) => {
    const updated = layers.filter((_, i) => i !== index);
    setAttributes({ layers: updated });
  };

  const currentSpot =
    selectedSpotIndex !== null && hotspots[selectedSpotIndex]
      ? hotspots[selectedSpotIndex]
      : null;

  return (
    <div {...blockProps}>
      {/* Sidebar Inspector Controls */}
      <InspectorControls>
        <PanelBody title={t('settings.mediaType')} initialOpen={true}>
          <SelectControl
            label={t('settings.mediaType')}
            help={t('settings.mediaTypeHelp')}
            value={mediaType}
            options={[
              { label: t('modes.imageHotspots'), value: 'image-hotspots' },
              { label: t('modes.imageSliderLayers'), value: 'image-slider-layers' },
              { label: t('modes.panorama360'), value: 'panorama-360' },
            ]}
            onChange={(val) => setAttributes({ mediaType: val })}
          />

          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              {t('settings.mainImage')}
            </label>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => setAttributes({ mainImage: media.url })}
                allowedTypes={['image']}
                value={mainImage}
                render={({ open }) => (
                  <div>
                    {mainImage ? (
                      <div>
                        <img
                          src={mainImage}
                          alt=""
                          style={{
                            width: '100%',
                            height: '140px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                            marginBottom: '0.5rem',
                          }}
                        />
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <Button variant="secondary" onClick={open} style={{ flex: 1 }}>
                            {t('settings.replaceImage')}
                          </Button>
                          <Button
                            variant="link"
                            isDestructive
                            onClick={() => setAttributes({ mainImage: '' })}
                          >
                            {t('settings.removeImage')}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button variant="primary" onClick={open}>
                        {t('settings.uploadImage')}
                      </Button>
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>
          </div>
        </PanelBody>

        {/* Hotspots Settings Panel */}
        {mediaType === 'image-hotspots' && (
          <>
            <PanelBody title={t('settings.quizSettings')} initialOpen={false}>
              <ToggleControl
                label={t('settings.showQuizEvaluation')}
                help={t('settings.showQuizHelp')}
                checked={showQuizEvaluation}
                onChange={(val) => setAttributes({ showQuizEvaluation: val })}
              />
            </PanelBody>

            <PanelBody title={t('settings.hotspots')} initialOpen={true}>
              <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                {t('settings.clickToAddHelp')}
              </p>

              <Button
                variant="secondary"
                onClick={() => {
                  const newSpot = {
                    id: `spot-${Date.now()}`,
                    x: 50,
                    y: 50,
                    title: `${t('settings.hotspotItem', { index: hotspots.length + 1 })}`,
                    description: '',
                    isCorrectTarget: true,
                    feedback: '',
                    icon: 'fa-solid fa-location-dot',
                    color: '#0d6efd',
                  };
                  const updated = [...hotspots, newSpot];
                  setAttributes({ hotspots: updated });
                  setSelectedSpotIndex(updated.length - 1);
                }}
                style={{ marginBottom: '1rem', width: '100%' }}
              >
                + {t('settings.addHotspot')}
              </Button>

              {/* Hotspot list selector buttons */}
              {hotspots.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginBottom: '1rem',
                  }}
                >
                  {hotspots.map((spot, idx) => (
                    <Button
                      key={spot.id || idx}
                      variant={selectedSpotIndex === idx ? 'primary' : 'tertiary'}
                      onClick={() => setSelectedSpotIndex(idx)}
                      style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                    >
                      {spot.title || `${idx + 1}`}
                    </Button>
                  ))}
                </div>
              )}

              {/* Edit Selected Hotspot Form */}
              {currentSpot && selectedSpotIndex !== null && (
                <div className="luiz0067-inspector-card">
                  <div className="luiz0067-inspector-card-header">
                    <span>
                      {t('settings.hotspotItem', { index: selectedSpotIndex + 1 })}
                    </span>
                    <Button
                      isDestructive
                      variant="link"
                      onClick={() => deleteHotspot(selectedSpotIndex)}
                    >
                      {t('settings.deleteHotspot')}
                    </Button>
                  </div>

                  <TextControl
                    label={t('settings.title')}
                    placeholder={t('settings.titlePlaceholder')}
                    value={currentSpot.title || ''}
                    onChange={(val) => updateHotspot(selectedSpotIndex, 'title', val)}
                  />

                  <TextareaControl
                    label={t('settings.description')}
                    placeholder={t('settings.descriptionPlaceholder')}
                    value={currentSpot.description || ''}
                    rows={3}
                    onChange={(val) =>
                      updateHotspot(selectedSpotIndex, 'description', val)
                    }
                  />

                  <div className="luiz0067-coord-grid">
                    <RangeControl
                      label={t('settings.coordX')}
                      value={currentSpot.x}
                      min={0}
                      max={100}
                      step={0.5}
                      onChange={(val) => updateHotspot(selectedSpotIndex, 'x', val)}
                    />
                    <RangeControl
                      label={t('settings.coordY')}
                      value={currentSpot.y}
                      min={0}
                      max={100}
                      step={0.5}
                      onChange={(val) => updateHotspot(selectedSpotIndex, 'y', val)}
                    />
                  </div>

                  <SelectControl
                    label={t('settings.icon')}
                    value={currentSpot.icon || 'fa-solid fa-location-dot'}
                    options={ICON_OPTIONS}
                    onChange={(val) => updateHotspot(selectedSpotIndex, 'icon', val)}
                  />

                  <SelectControl
                    label={t('settings.iconColor')}
                    value={currentSpot.color || '#0d6efd'}
                    options={COLOR_PRESETS}
                    onChange={(val) => updateHotspot(selectedSpotIndex, 'color', val)}
                  />

                  {showQuizEvaluation && (
                    <div
                      style={{
                        marginTop: '0.75rem',
                        padding: '0.65rem',
                        background: '#f1f5f9',
                        borderRadius: '6px',
                      }}
                    >
                      <ToggleControl
                        label={t('settings.isCorrectTarget')}
                        checked={currentSpot.isCorrectTarget ?? true}
                        onChange={(val) =>
                          updateHotspot(selectedSpotIndex, 'isCorrectTarget', val)
                        }
                      />
                      <TextControl
                        label={t('settings.feedback')}
                        placeholder={t('settings.feedbackPlaceholder')}
                        value={currentSpot.feedback || ''}
                        onChange={(val) =>
                          updateHotspot(selectedSpotIndex, 'feedback', val)
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            </PanelBody>
          </>
        )}

        {/* Agamotto Layers Panel */}
        {mediaType === 'image-slider-layers' && (
          <PanelBody title={t('settings.layers')} initialOpen={true}>
            <Button
              variant="secondary"
              onClick={() => addLayer('', '')}
              style={{ marginBottom: '1rem', width: '100%' }}
            >
              + {t('settings.addLayer')}
            </Button>

            {layers.map((layer, lIdx) => (
              <div key={lIdx} className="luiz0067-inspector-card">
                <div className="luiz0067-inspector-card-header">
                  <span>{layer.title || `Camada ${lIdx + 1}`}</span>
                  <Button
                    isDestructive
                    variant="link"
                    onClick={() => deleteLayer(lIdx)}
                  >
                    {t('settings.deleteLayer')}
                  </Button>
                </div>

                <TextControl
                  label={t('settings.layerTitle', { index: lIdx + 1 })}
                  placeholder={t('settings.layerPlaceholder')}
                  value={layer.title || ''}
                  onChange={(val) => updateLayer(lIdx, 'title', val)}
                />

                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateLayer(lIdx, 'url', media.url)}
                    allowedTypes={['image']}
                    value={layer.url}
                    render={({ open }) => (
                      <div>
                        {layer.url ? (
                          <div>
                            <img
                              src={layer.url}
                              alt=""
                              style={{
                                width: '100%',
                                height: '100px',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                marginBottom: '0.4rem',
                              }}
                            />
                            <Button variant="secondary" onClick={open}>
                              {t('settings.replaceImage')}
                            </Button>
                          </div>
                        ) : (
                          <Button variant="primary" onClick={open}>
                            {t('settings.uploadImage')}
                          </Button>
                        )}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
              </div>
            ))}
          </PanelBody>
        )}

        {/* 360 Panorama Panel */}
        {mediaType === 'panorama-360' && (
          <PanelBody title={t('settings.panoramaSettings')} initialOpen={true}>
            <ToggleControl
              label={t('settings.autoRotate')}
              checked={panoramaAutoRotate}
              onChange={(val) => setAttributes({ panoramaAutoRotate: val })}
            />
          </PanelBody>
        )}
      </InspectorControls>

      {/* Editor Canvas View */}
      {mediaType === 'image-hotspots' && (
        <div className="luiz0067-editor-canvas" onClick={handleImageClick}>
          <div className="luiz0067-editor-crosshair-hint">
            <i className="fa-solid fa-crosshairs"></i>
            <span>{t('settings.clickToAddHelp')}</span>
          </div>

          {mainImage ? (
            <img src={mainImage} alt="" draggable={false} />
          ) : (
            <div
              style={{
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#1e293b',
                color: '#94a3b8',
              }}
            >
              Clique na barra lateral para selecionar a Imagem Principal
            </div>
          )}

          {/* Render pins on editor canvas */}
          {hotspots.map((spot, idx) => {
            const isSelected = selectedSpotIndex === idx;
            const pinColor = spot.color || '#0d6efd';
            const pinIcon = spot.icon || 'fa-solid fa-location-dot';

            return (
              <button
                key={spot.id || idx}
                type="button"
                className={`luiz0067-hotspot-pin ${isSelected ? 'is-selected' : ''}`}
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  backgroundColor: pinColor,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSpotIndex(idx);
                }}
              >
                <i className={pinIcon}></i>
                <span className="luiz0067-pulse-ring" style={{ borderColor: pinColor }}></span>
                <span className="luiz0067-pin-coord-badge">
                  {spot.x}% , {spot.y}%
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Editor View for Agamotto Layers */}
      {mediaType === 'image-slider-layers' && (
        <div className="luiz0067-layers-container">
          <div className="luiz0067-layer-frame">
            {mainImage ? (
              <img src={mainImage} alt="" className="luiz0067-base-layer" />
            ) : (
              <div
                style={{
                  height: '260px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#1e293b',
                  color: '#94a3b8',
                }}
              >
                Selecione a Imagem Base na lateral
              </div>
            )}
          </div>
          <div style={{ padding: '1rem', color: '#fff', textAlign: 'center' }}>
            <strong>{layers.length} Camadas cadastradas</strong> (Controle de opacidade
            ativo no frontend)
          </div>
        </div>
      )}

      {/* Editor View for 360 Panorama */}
      {mediaType === 'panorama-360' && (
        <div
          style={{
            height: '320px',
            background: '#090d16',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#38bdf8',
            borderRadius: '8px',
          }}
        >
          <i className="fa-solid fa-vr-cardboard fa-3x" style={{ marginBottom: '1rem' }}></i>
          <h5>Visualizador Panorama 360°</h5>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            {mainImage
              ? 'Imagem equirretangular pronta para navegação 360° interativa.'
              : 'Faça o upload de uma imagem panorâmica na barra lateral.'}
          </p>
        </div>
      )}
    </div>
  );
}
