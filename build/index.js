(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // wp-global:@wordpress/blocks
  var require_blocks = __commonJS({
    "wp-global:@wordpress/blocks"(exports, module) {
      module.exports = window.wp.blocks;
    }
  });

  // wp-global:@wordpress/element
  var require_element = __commonJS({
    "wp-global:@wordpress/element"(exports, module) {
      module.exports = window.wp.element;
    }
  });

  // wp-global:@wordpress/block-editor
  var require_block_editor = __commonJS({
    "wp-global:@wordpress/block-editor"(exports, module) {
      module.exports = window.wp.blockEditor;
    }
  });

  // wp-global:@wordpress/components
  var require_components = __commonJS({
    "wp-global:@wordpress/components"(exports, module) {
      module.exports = window.wp.components;
    }
  });

  // src/index.js
  var import_blocks = __toESM(require_blocks());

  // block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "luiz0067/media-hotspot",
    version: "1.0.0",
    title: "Luiz0067 Media Hotspot",
    category: "media",
    icon: "format-image",
    description: "Interactive percentage Hotspots, Agamotto Layer Sliders, and 360 Panorama with Bootstrap 5 modals and Font Awesome markers.",
    supports: {
      html: false,
      align: ["wide", "full"]
    },
    textdomain: "luiz0067-media-hotspot",
    attributes: {
      mediaType: {
        type: "string",
        default: "image-hotspots"
      },
      mainImage: {
        type: "string",
        default: ""
      },
      layers: {
        type: "array",
        default: []
      },
      hotspots: {
        type: "array",
        default: []
      },
      showQuizEvaluation: {
        type: "boolean",
        default: false
      },
      sliderValue: {
        type: "number",
        default: 50
      },
      panoramaAutoRotate: {
        type: "boolean",
        default: true
      }
    },
    editorScript: "file:./build/index.js",
    editorStyle: "file:./build/index.css",
    style: "file:./build/style-index.css",
    viewScript: "file:./build/view.js"
  };

  // src/edit.js
  var import_element = __toESM(require_element());
  var import_block_editor = __toESM(require_block_editor());
  var import_components = __toESM(require_components());

  // languages/pt-br.json
  var pt_br_default = {
    locale: "pt-BR",
    block: {
      title: "M\xEDdia Interativa com Hotspots (Luiz0067)",
      description: "Pontos clic\xE1veis (hotspots) com coordenadas percentuais (X%, Y%) sobre imagem, imagens sobrepostas com controle deslizante (estilo Agamotto/Before-After) e panorama 360\xB0 interativo."
    },
    modes: {
      imageHotspots: "Pontos de Interesse (Hotspots)",
      imageSliderLayers: "Camadas Deslizantes (Agamotto / Antes e Depois)",
      panorama360: "Panorama 360\xB0 Interativo"
    },
    settings: {
      mediaType: "Tipo de M\xEDdia Interativa",
      mediaTypeHelp: "Selecione o modo de visualiza\xE7\xE3o interativa que deseja criar.",
      mainImage: "Imagem Principal / Base",
      uploadImage: "Selecionar Imagem",
      replaceImage: "Substituir Imagem",
      removeImage: "Remover Imagem",
      clickToAddHelp: "Dica: Com o modo de hotspots ativo, clique diretamente na imagem para fixar um novo ponto!",
      hotspots: "Gerenciador de Hotspots",
      addHotspot: "Adicionar Ponto Manualmente",
      hotspotItem: "Ponto {index}",
      coordinates: "Coordenadas Percentuais",
      coordX: "Posi\xE7\xE3o X (%)",
      coordY: "Posi\xE7\xE3o Y (%)",
      title: "T\xEDtulo do Ponto",
      titlePlaceholder: "Ex: Torre Central",
      description: "Descri\xE7\xE3o / Conte\xFAdo",
      descriptionPlaceholder: "Insira o conte\xFAdo exibido na janela modal ou tooltip...",
      icon: "\xCDcone Font Awesome",
      iconColor: "Cor do Marcador",
      quizSettings: "Configura\xE7\xF5es de Avalia\xE7\xE3o / Teste",
      showQuizEvaluation: "Ativar Modo Teste / Quiz Avaliativo",
      showQuizHelp: "Valida cliques dos usu\xE1rios, atribuindo pontua\xE7\xE3o a pontos corretos e exibindo feedback instant\xE2neo.",
      isCorrectTarget: "Este ponto \xE9 uma resposta correta?",
      feedback: "Mensagem de Feedback",
      feedbackPlaceholder: "Ex: Parab\xE9ns! Voc\xEA encontrou o elemento correto.",
      deleteHotspot: "Remover Ponto",
      layers: "Camadas Sobrepostas (Agamotto)",
      addLayer: "Adicionar Nova Camada",
      layerTitle: "R\xF3tulo da Camada {index}",
      layerPlaceholder: "Ex: Vis\xE3o Raio-X, Pintura Original, 2024...",
      layerImage: "Imagem da Camada",
      deleteLayer: "Remover Camada",
      sliderInitial: "Posi\xE7\xE3o Inicial do Slider (%)",
      panoramaSettings: "Ajustes do Panorama 360\xB0",
      autoRotate: "Rota\xE7\xE3o Autom\xE1tica Suave"
    },
    frontend: {
      openModal: "Ver detalhes",
      closeModal: "Fechar",
      correct: "Correto!",
      incorrect: "Tente novamente!",
      score: "Pontua\xE7\xE3o",
      found: "alvos encontrados",
      restartQuiz: "Reiniciar Quiz",
      layerControl: "Controle de Camadas",
      dragToExplore: "Clique e arraste para explorar em 360\xB0",
      panoramaHint: "Use o mouse ou toque para girar a visualiza\xE7\xE3o"
    }
  };

  // languages/en-us.json
  var en_us_default = {
    locale: "en-US",
    block: {
      title: "Interactive Media Hotspot (Luiz0067)",
      description: "Clickable hotspots with percentage coordinates (X%, Y%) over images, overlapping layers with interactive slider (Agamotto / Before-After), and 360\xB0 panorama."
    },
    modes: {
      imageHotspots: "Points of Interest (Hotspots)",
      imageSliderLayers: "Sliding Layers (Agamotto / Before-After)",
      panorama360: "Interactive 360\xB0 Panorama"
    },
    settings: {
      mediaType: "Interactive Media Type",
      mediaTypeHelp: "Select the interactive display mode you want to present.",
      mainImage: "Main / Base Image",
      uploadImage: "Select Image",
      replaceImage: "Replace Image",
      removeImage: "Remove Image",
      clickToAddHelp: "Tip: With hotspots mode active, click directly on the image to place a new pin!",
      hotspots: "Hotspots Manager",
      addHotspot: "Add Pin Manually",
      hotspotItem: "Pin {index}",
      coordinates: "Percentage Coordinates",
      coordX: "X Position (%)",
      coordY: "Y Position (%)",
      title: "Pin Title",
      titlePlaceholder: "E.g.: Central Spire",
      description: "Description / Content",
      descriptionPlaceholder: "Enter the content displayed in the modal or tooltip...",
      icon: "Font Awesome Icon",
      iconColor: "Marker Color",
      quizSettings: "Evaluation / Test Settings",
      showQuizEvaluation: "Enable Test / Quiz Mode",
      showQuizHelp: "Evaluates user clicks, awarding points for correct targets and displaying instant feedback.",
      isCorrectTarget: "Is this pin a correct target?",
      feedback: "Feedback Message",
      feedbackPlaceholder: "E.g.: Correct! You found the designated target.",
      deleteHotspot: "Delete Pin",
      layers: "Overlapping Layers (Agamotto)",
      addLayer: "Add New Layer",
      layerTitle: "Layer {index} Label",
      layerPlaceholder: "E.g.: X-Ray View, Original Sketch, 2024...",
      layerImage: "Layer Image",
      deleteLayer: "Delete Layer",
      sliderInitial: "Initial Slider Position (%)",
      panoramaSettings: "360\xB0 Panorama Adjustments",
      autoRotate: "Smooth Auto-Rotation"
    },
    frontend: {
      openModal: "View Details",
      closeModal: "Close",
      correct: "Correct!",
      incorrect: "Try Again!",
      score: "Score",
      found: "targets found",
      restartQuiz: "Restart Quiz",
      layerControl: "Layer Control",
      dragToExplore: "Click and drag to explore in 360\xB0",
      panoramaHint: "Use mouse or touch to rotate view"
    }
  };

  // languages/It.json
  var It_default = {
    locale: "it-IT",
    block: {
      title: "Media Interattivo con Hotspot (Luiz0067)",
      description: "Punti cliccabili (hotspot) con coordinate percentuali (X%, Y%) su immagini, livelli sovrapposti con cursore scorrevole (Agamotto / Prima-Dopo) e panorama interattivo a 360\xB0."
    },
    modes: {
      imageHotspots: "Punti di Interesse (Hotspot)",
      imageSliderLayers: "Livelli Scorrevoli (Agamotto / Prima e Dopo)",
      panorama360: "Panorama 360\xB0 Interattivo"
    },
    settings: {
      mediaType: "Tipo di Media Interattivo",
      mediaTypeHelp: "Seleziona la modalit\xE0 interattiva da visualizzare.",
      mainImage: "Immagine Principale / Base",
      uploadImage: "Seleziona Immagine",
      replaceImage: "Sostituisci Immagine",
      removeImage: "Rimuovi Immagine",
      clickToAddHelp: "Suggerimento: In modalit\xE0 hotspot, fai clic direttamente sull'immagine per posizionare un nuovo punto!",
      hotspots: "Gestione Hotspot",
      addHotspot: "Aggiungi Punto Manualmente",
      hotspotItem: "Punto {index}",
      coordinates: "Coordinate Percentuali",
      coordX: "Posizione X (%)",
      coordY: "Posizione Y (%)",
      title: "Titolo del Punto",
      titlePlaceholder: "Es: Guglia Centrale",
      description: "Descrizione / Contenuto",
      descriptionPlaceholder: "Inserisci il testo per il popover o finestra modale...",
      icon: "Icona Font Awesome",
      iconColor: "Colore del Segnaposto",
      quizSettings: "Impostazioni di Valutazione / Quiz",
      showQuizEvaluation: "Attiva Modalit\xE0 Quiz / Valutazione",
      showQuizHelp: "Valuta i clic degli utenti assegnando punteggi ai punti corretti con feedback istantaneo.",
      isCorrectTarget: "Questo punto \xE8 un obiettivo corretto?",
      feedback: "Messaggio di Feedback",
      feedbackPlaceholder: "Es: Esatto! Hai individuato l'elemento corretto.",
      deleteHotspot: "Elimina Punto",
      layers: "Livelli Sovrapposti (Agamotto)",
      addLayer: "Aggiungi Nuovo Livello",
      layerTitle: "Etichetta Livello {index}",
      layerPlaceholder: "Es: Raggi X, Bozza Originale, 2024...",
      layerImage: "Immagine del Livello",
      deleteLayer: "Elimina Livello",
      sliderInitial: "Posizione Iniziale Cursore (%)",
      panoramaSettings: "Impostazioni Panorama 360\xB0",
      autoRotate: "Rotazione Automatica Fluida"
    },
    frontend: {
      openModal: "Visualizza Dettagli",
      closeModal: "Chiudi",
      correct: "Corretto!",
      incorrect: "Riprova!",
      score: "Punteggio",
      found: "bersagli trovati",
      restartQuiz: "Ricomincia Quiz",
      layerControl: "Controllo Livelli",
      dragToExplore: "Trascina per esplorare a 360\xB0",
      panoramaHint: "Usa il mouse o il tocco per ruotare la visuale"
    }
  };

  // languages/es.json
  var es_default = {
    locale: "es-ES",
    block: {
      title: "Medios Interactivos con Hotspots (Luiz0067)",
      description: "Puntos cliqueables (hotspots) con coordenadas porcentuales (X%, Y%) sobre im\xE1genes, capas superpuestas con control deslizante (estilo Agamotto / Antes-Despu\xE9s) y panorama 360\xB0 interactivo."
    },
    modes: {
      imageHotspots: "Puntos de Inter\xE9s (Hotspots)",
      imageSliderLayers: "Capas Deslizantes (Agamotto / Antes y Despu\xE9s)",
      panorama360: "Panorama 360\xB0 Interactivo"
    },
    settings: {
      mediaType: "Tipo de Medio Interactivo",
      mediaTypeHelp: "Seleccione el modo de visualizaci\xF3n interactiva que desea presentar.",
      mainImage: "Imagen Principal / Base",
      uploadImage: "Seleccionar Imagen",
      replaceImage: "Reemplazar Imagen",
      removeImage: "Eliminar Imagen",
      clickToAddHelp: "Consejo: \xA1Con el modo de hotspots activo, haga clic directamente en la imagen para fijar un nuevo punto!",
      hotspots: "Administrador de Hotspots",
      addHotspot: "A\xF1adir Punto Manualmente",
      hotspotItem: "Punto {index}",
      coordinates: "Coordenadas Porcentuales",
      coordX: "Posici\xF3n X (%)",
      coordY: "Posici\xF3n Y (%)",
      title: "T\xEDtulo del Punto",
      titlePlaceholder: "Ej: Torre Central",
      description: "Descripci\xF3n / Contenido",
      descriptionPlaceholder: "Ingrese el contenido mostrado en el modal o tooltip...",
      icon: "Icono Font Awesome",
      iconColor: "Color del Marcador",
      quizSettings: "Configuraciones de Evaluaci\xF3n / Quiz",
      showQuizEvaluation: "Activar Modo Prueba / Quiz Evaluativo",
      showQuizHelp: "Eval\xFAa los clics de los usuarios, otorgando puntuaci\xF3n a los puntos correctos y mostrando retroalimentaci\xF3n instant\xE1nea.",
      isCorrectTarget: "\xBFEs este punto un objetivo correcto?",
      feedback: "Mensaje de Retroalimentaci\xF3n",
      feedbackPlaceholder: "Ej: \xA1Excelente! Has encontrado el elemento correcto.",
      deleteHotspot: "Eliminar Punto",
      layers: "Capas Superpuestas (Agamotto)",
      addLayer: "A\xF1adir Nueva Capa",
      layerTitle: "Etiqueta de la Capa {index}",
      layerPlaceholder: "Ej: Vista Rayos X, Boceto Original, 2024...",
      layerImage: "Imagen de la Capa",
      deleteLayer: "Eliminar Capa",
      sliderInitial: "Posici\xF3n Inicial del Slider (%)",
      panoramaSettings: "Ajustes de Panorama 360\xB0",
      autoRotate: "Rotaci\xF3n Autom\xE1tica Suave"
    },
    frontend: {
      openModal: "Ver detalles",
      closeModal: "Cerrar",
      correct: "\xA1Correcto!",
      incorrect: "\xA1Int\xE9ntalo de nuevo!",
      score: "Puntuaci\xF3n",
      found: "objetivos encontrados",
      restartQuiz: "Reiniciar Quiz",
      layerControl: "Control de Capas",
      dragToExplore: "Haz clic y arrastra para explorar en 360\xB0",
      panoramaHint: "Usa el rat\xF3n o el tacto para girar la vista"
    }
  };

  // src/i18n.js
  var dictionaries = {
    "pt-BR": pt_br_default,
    "pt": pt_br_default,
    "en-US": en_us_default,
    "en": en_us_default,
    "it-IT": It_default,
    "it": It_default,
    "es-ES": es_default,
    "es": es_default
  };
  function getCurrentLocale() {
    if (typeof window !== "undefined") {
      if (window.wp && window.wp.i18n && typeof window.wp.i18n.getLocaleData === "function") {
        const wpLocale = window.wp.i18n.getLocaleData()[""]?.lang;
        if (wpLocale && dictionaries[wpLocale]) return wpLocale;
      }
      const htmlLang = document.documentElement.lang;
      if (htmlLang) {
        if (dictionaries[htmlLang]) return htmlLang;
        const base = htmlLang.split("-")[0];
        if (dictionaries[base]) return base;
      }
      const navLang = navigator.language || navigator.userLanguage;
      if (navLang) {
        if (dictionaries[navLang]) return navLang;
        const base = navLang.split("-")[0];
        if (dictionaries[base]) return base;
      }
    }
    return "pt-BR";
  }
  function t(path, placeholders = {}) {
    const locale = getCurrentLocale();
    const dict = dictionaries[locale] || dictionaries["pt-BR"] || pt_br_default;
    const parts = path.split(".");
    let val = dict;
    for (const part of parts) {
      if (val && typeof val === "object" && part in val) {
        val = val[part];
      } else {
        let fb = pt_br_default;
        for (const p of parts) {
          if (fb && typeof fb === "object" && p in fb) {
            fb = fb[p];
          } else {
            fb = path;
            break;
          }
        }
        val = fb;
        break;
      }
    }
    if (typeof val === "string") {
      return val.replace(/{(\w+)}/g, (_, key) => placeholders[key] ?? `{${key}}`);
    }
    return path;
  }

  // src/edit.js
  var ICON_OPTIONS = [
    { label: "\u{1F4CD} Marcador Padr\xE3o (Location Dot)", value: "fa-solid fa-location-dot" },
    { label: "\u2139\uFE0F Informa\xE7\xE3o (Circle Info)", value: "fa-solid fa-circle-info" },
    { label: "\u2B50 Estrela (Star)", value: "fa-solid fa-star" },
    { label: "\u{1F3AF} Alvo / Mira (Crosshairs)", value: "fa-solid fa-crosshairs" },
    { label: "\u{1F4A1} L\xE2mpada (Lightbulb)", value: "fa-solid fa-lightbulb" },
    { label: "\u2753 Pergunta (Circle Question)", value: "fa-solid fa-circle-question" },
    { label: "\u26A0\uFE0F Alerta (Triangle Exclamation)", value: "fa-solid fa-triangle-exclamation" },
    { label: "\u{1F50D} Lupa (Magnifying Glass)", value: "fa-solid fa-magnifying-glass" },
    { label: "\u{1F3F7}\uFE0F Etiqueta (Tag)", value: "fa-solid fa-tag" },
    { label: "\u2764\uFE0F Cora\xE7\xE3o (Heart)", value: "fa-solid fa-heart" }
  ];
  var COLOR_PRESETS = [
    { label: "Azul", value: "#0d6efd" },
    { label: "Verde", value: "#198754" },
    { label: "Vermelho", value: "#dc3545" },
    { label: "Amarelo / Dourado", value: "#ffc107" },
    { label: "Roxo", value: "#6f42c1" },
    { label: "Ciano", value: "#0dcaf0" },
    { label: "Laranja", value: "#fd7e14" }
  ];
  function Edit({ attributes, setAttributes }) {
    const {
      mediaType = "image-hotspots",
      mainImage = "",
      layers = [],
      hotspots = [],
      showQuizEvaluation = false,
      sliderValue = 50,
      panoramaAutoRotate = true
    } = attributes;
    const [selectedSpotIndex, setSelectedSpotIndex] = (0, import_element.useState)(
      hotspots.length > 0 ? 0 : null
    );
    const blockProps = (0, import_block_editor.useBlockProps)({
      className: `wp-block-luiz0067-media-hotspot editor-view mode-${mediaType}`
    });
    const handleImageClick = (e) => {
      if (mediaType !== "image-hotspots") return;
      if (!mainImage) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.round((e.clientX - rect.left) / rect.width * 100 * 10) / 10;
      const y = Math.round((e.clientY - rect.top) / rect.height * 100 * 10) / 10;
      const newSpot = {
        id: `spot-${Date.now()}`,
        x,
        y,
        title: `${t("settings.hotspotItem", { index: hotspots.length + 1 })}`,
        description: "",
        isCorrectTarget: true,
        feedback: "",
        icon: "fa-solid fa-location-dot",
        color: "#0d6efd"
      };
      const updated = [...hotspots, newSpot];
      setAttributes({ hotspots: updated });
      setSelectedSpotIndex(updated.length - 1);
    };
    const updateHotspot = (index, field, value) => {
      const updated = [...hotspots];
      updated[index] = { ...updated[index], [field]: value };
      setAttributes({ hotspots: updated });
    };
    const deleteHotspot = (index) => {
      const updated = hotspots.filter((_, i) => i !== index);
      setAttributes({ hotspots: updated });
      if (selectedSpotIndex === index) {
        setSelectedSpotIndex(updated.length > 0 ? 0 : null);
      } else if (selectedSpotIndex > index) {
        setSelectedSpotIndex(selectedSpotIndex - 1);
      }
    };
    const addLayer = (url = "", title = "") => {
      const updated = [
        ...layers,
        {
          url,
          title: title || `${t("settings.layerTitle", { index: layers.length + 1 })}`
        }
      ];
      setAttributes({ layers: updated });
    };
    const updateLayer = (index, field, value) => {
      const updated = [...layers];
      updated[index] = { ...updated[index], [field]: value };
      setAttributes({ layers: updated });
    };
    const deleteLayer = (index) => {
      const updated = layers.filter((_, i) => i !== index);
      setAttributes({ layers: updated });
    };
    const currentSpot = selectedSpotIndex !== null && hotspots[selectedSpotIndex] ? hotspots[selectedSpotIndex] : null;
    return /* @__PURE__ */ React.createElement("div", { ...blockProps }, /* @__PURE__ */ React.createElement(import_block_editor.InspectorControls, null, /* @__PURE__ */ React.createElement(import_components.PanelBody, { title: t("settings.mediaType"), initialOpen: true }, /* @__PURE__ */ React.createElement(
      import_components.SelectControl,
      {
        label: t("settings.mediaType"),
        help: t("settings.mediaTypeHelp"),
        value: mediaType,
        options: [
          { label: t("modes.imageHotspots"), value: "image-hotspots" },
          { label: t("modes.imageSliderLayers"), value: "image-slider-layers" },
          { label: t("modes.panorama360"), value: "panorama-360" }
        ],
        onChange: (val) => setAttributes({ mediaType: val })
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "1rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", marginBottom: "0.5rem", fontWeight: 600 } }, t("settings.mainImage")), /* @__PURE__ */ React.createElement(import_block_editor.MediaUploadCheck, null, /* @__PURE__ */ React.createElement(
      import_block_editor.MediaUpload,
      {
        onSelect: (media) => setAttributes({ mainImage: media.url }),
        allowedTypes: ["image"],
        value: mainImage,
        render: ({ open }) => /* @__PURE__ */ React.createElement("div", null, mainImage ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
          "img",
          {
            src: mainImage,
            alt: "",
            style: {
              width: "100%",
              height: "140px",
              objectFit: "cover",
              borderRadius: "6px",
              marginBottom: "0.5rem"
            }
          }
        ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.5rem" } }, /* @__PURE__ */ React.createElement(import_components.Button, { variant: "secondary", onClick: open, style: { flex: 1 } }, t("settings.replaceImage")), /* @__PURE__ */ React.createElement(
          import_components.Button,
          {
            variant: "link",
            isDestructive: true,
            onClick: () => setAttributes({ mainImage: "" })
          },
          t("settings.removeImage")
        ))) : /* @__PURE__ */ React.createElement(import_components.Button, { variant: "primary", onClick: open }, t("settings.uploadImage")))
      }
    )))), mediaType === "image-hotspots" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_components.PanelBody, { title: t("settings.quizSettings"), initialOpen: false }, /* @__PURE__ */ React.createElement(
      import_components.ToggleControl,
      {
        label: t("settings.showQuizEvaluation"),
        help: t("settings.showQuizHelp"),
        checked: showQuizEvaluation,
        onChange: (val) => setAttributes({ showQuizEvaluation: val })
      }
    )), /* @__PURE__ */ React.createElement(import_components.PanelBody, { title: t("settings.hotspots"), initialOpen: true }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "0.82rem", color: "#64748b" } }, t("settings.clickToAddHelp")), /* @__PURE__ */ React.createElement(
      import_components.Button,
      {
        variant: "secondary",
        onClick: () => {
          const newSpot = {
            id: `spot-${Date.now()}`,
            x: 50,
            y: 50,
            title: `${t("settings.hotspotItem", { index: hotspots.length + 1 })}`,
            description: "",
            isCorrectTarget: true,
            feedback: "",
            icon: "fa-solid fa-location-dot",
            color: "#0d6efd"
          };
          const updated = [...hotspots, newSpot];
          setAttributes({ hotspots: updated });
          setSelectedSpotIndex(updated.length - 1);
        },
        style: { marginBottom: "1rem", width: "100%" }
      },
      "+ ",
      t("settings.addHotspot")
    ), hotspots.length > 0 && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "0.35rem",
          marginBottom: "1rem"
        }
      },
      hotspots.map((spot, idx) => /* @__PURE__ */ React.createElement(
        import_components.Button,
        {
          key: spot.id || idx,
          variant: selectedSpotIndex === idx ? "primary" : "tertiary",
          onClick: () => setSelectedSpotIndex(idx),
          style: { fontSize: "0.75rem", padding: "0.2rem 0.6rem" }
        },
        spot.title || `${idx + 1}`
      ))
    ), currentSpot && selectedSpotIndex !== null && /* @__PURE__ */ React.createElement("div", { className: "luiz0067-inspector-card" }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-inspector-card-header" }, /* @__PURE__ */ React.createElement("span", null, t("settings.hotspotItem", { index: selectedSpotIndex + 1 })), /* @__PURE__ */ React.createElement(
      import_components.Button,
      {
        isDestructive: true,
        variant: "link",
        onClick: () => deleteHotspot(selectedSpotIndex)
      },
      t("settings.deleteHotspot")
    )), /* @__PURE__ */ React.createElement(
      import_components.TextControl,
      {
        label: t("settings.title"),
        placeholder: t("settings.titlePlaceholder"),
        value: currentSpot.title || "",
        onChange: (val) => updateHotspot(selectedSpotIndex, "title", val)
      }
    ), /* @__PURE__ */ React.createElement(
      import_components.TextareaControl,
      {
        label: t("settings.description"),
        placeholder: t("settings.descriptionPlaceholder"),
        value: currentSpot.description || "",
        rows: 3,
        onChange: (val) => updateHotspot(selectedSpotIndex, "description", val)
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "luiz0067-coord-grid" }, /* @__PURE__ */ React.createElement(
      import_components.RangeControl,
      {
        label: t("settings.coordX"),
        value: currentSpot.x,
        min: 0,
        max: 100,
        step: 0.5,
        onChange: (val) => updateHotspot(selectedSpotIndex, "x", val)
      }
    ), /* @__PURE__ */ React.createElement(
      import_components.RangeControl,
      {
        label: t("settings.coordY"),
        value: currentSpot.y,
        min: 0,
        max: 100,
        step: 0.5,
        onChange: (val) => updateHotspot(selectedSpotIndex, "y", val)
      }
    )), /* @__PURE__ */ React.createElement(
      import_components.SelectControl,
      {
        label: t("settings.icon"),
        value: currentSpot.icon || "fa-solid fa-location-dot",
        options: ICON_OPTIONS,
        onChange: (val) => updateHotspot(selectedSpotIndex, "icon", val)
      }
    ), /* @__PURE__ */ React.createElement(
      import_components.SelectControl,
      {
        label: t("settings.iconColor"),
        value: currentSpot.color || "#0d6efd",
        options: COLOR_PRESETS,
        onChange: (val) => updateHotspot(selectedSpotIndex, "color", val)
      }
    ), showQuizEvaluation && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          marginTop: "0.75rem",
          padding: "0.65rem",
          background: "#f1f5f9",
          borderRadius: "6px"
        }
      },
      /* @__PURE__ */ React.createElement(
        import_components.ToggleControl,
        {
          label: t("settings.isCorrectTarget"),
          checked: currentSpot.isCorrectTarget ?? true,
          onChange: (val) => updateHotspot(selectedSpotIndex, "isCorrectTarget", val)
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_components.TextControl,
        {
          label: t("settings.feedback"),
          placeholder: t("settings.feedbackPlaceholder"),
          value: currentSpot.feedback || "",
          onChange: (val) => updateHotspot(selectedSpotIndex, "feedback", val)
        }
      )
    )))), mediaType === "image-slider-layers" && /* @__PURE__ */ React.createElement(import_components.PanelBody, { title: t("settings.layers"), initialOpen: true }, /* @__PURE__ */ React.createElement(
      import_components.Button,
      {
        variant: "secondary",
        onClick: () => addLayer("", ""),
        style: { marginBottom: "1rem", width: "100%" }
      },
      "+ ",
      t("settings.addLayer")
    ), layers.map((layer, lIdx) => /* @__PURE__ */ React.createElement("div", { key: lIdx, className: "luiz0067-inspector-card" }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-inspector-card-header" }, /* @__PURE__ */ React.createElement("span", null, layer.title || `Camada ${lIdx + 1}`), /* @__PURE__ */ React.createElement(
      import_components.Button,
      {
        isDestructive: true,
        variant: "link",
        onClick: () => deleteLayer(lIdx)
      },
      t("settings.deleteLayer")
    )), /* @__PURE__ */ React.createElement(
      import_components.TextControl,
      {
        label: t("settings.layerTitle", { index: lIdx + 1 }),
        placeholder: t("settings.layerPlaceholder"),
        value: layer.title || "",
        onChange: (val) => updateLayer(lIdx, "title", val)
      }
    ), /* @__PURE__ */ React.createElement(import_block_editor.MediaUploadCheck, null, /* @__PURE__ */ React.createElement(
      import_block_editor.MediaUpload,
      {
        onSelect: (media) => updateLayer(lIdx, "url", media.url),
        allowedTypes: ["image"],
        value: layer.url,
        render: ({ open }) => /* @__PURE__ */ React.createElement("div", null, layer.url ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
          "img",
          {
            src: layer.url,
            alt: "",
            style: {
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "0.4rem"
            }
          }
        ), /* @__PURE__ */ React.createElement(import_components.Button, { variant: "secondary", onClick: open }, t("settings.replaceImage"))) : /* @__PURE__ */ React.createElement(import_components.Button, { variant: "primary", onClick: open }, t("settings.uploadImage")))
      }
    ))))), mediaType === "panorama-360" && /* @__PURE__ */ React.createElement(import_components.PanelBody, { title: t("settings.panoramaSettings"), initialOpen: true }, /* @__PURE__ */ React.createElement(
      import_components.ToggleControl,
      {
        label: t("settings.autoRotate"),
        checked: panoramaAutoRotate,
        onChange: (val) => setAttributes({ panoramaAutoRotate: val })
      }
    ))), mediaType === "image-hotspots" && /* @__PURE__ */ React.createElement("div", { className: "luiz0067-editor-canvas", onClick: handleImageClick }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-editor-crosshair-hint" }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-crosshairs" }), /* @__PURE__ */ React.createElement("span", null, t("settings.clickToAddHelp"))), mainImage ? /* @__PURE__ */ React.createElement("img", { src: mainImage, alt: "", draggable: false }) : /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          height: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e293b",
          color: "#94a3b8"
        }
      },
      "Clique na barra lateral para selecionar a Imagem Principal"
    ), hotspots.map((spot, idx) => {
      const isSelected = selectedSpotIndex === idx;
      const pinColor = spot.color || "#0d6efd";
      const pinIcon = spot.icon || "fa-solid fa-location-dot";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: spot.id || idx,
          type: "button",
          className: `luiz0067-hotspot-pin ${isSelected ? "is-selected" : ""}`,
          style: {
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            backgroundColor: pinColor
          },
          onClick: (e) => {
            e.stopPropagation();
            setSelectedSpotIndex(idx);
          }
        },
        /* @__PURE__ */ React.createElement("i", { className: pinIcon }),
        /* @__PURE__ */ React.createElement("span", { className: "luiz0067-pulse-ring", style: { borderColor: pinColor } }),
        /* @__PURE__ */ React.createElement("span", { className: "luiz0067-pin-coord-badge" }, spot.x, "% , ", spot.y, "%")
      );
    })), mediaType === "image-slider-layers" && /* @__PURE__ */ React.createElement("div", { className: "luiz0067-layers-container" }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-layer-frame" }, mainImage ? /* @__PURE__ */ React.createElement("img", { src: mainImage, alt: "", className: "luiz0067-base-layer" }) : /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          height: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e293b",
          color: "#94a3b8"
        }
      },
      "Selecione a Imagem Base na lateral"
    )), /* @__PURE__ */ React.createElement("div", { style: { padding: "1rem", color: "#fff", textAlign: "center" } }, /* @__PURE__ */ React.createElement("strong", null, layers.length, " Camadas cadastradas"), " (Controle de opacidade ativo no frontend)")), mediaType === "panorama-360" && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          height: "320px",
          background: "#090d16",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#38bdf8",
          borderRadius: "8px"
        }
      },
      /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-vr-cardboard fa-3x", style: { marginBottom: "1rem" } }),
      /* @__PURE__ */ React.createElement("h5", null, "Visualizador Panorama 360\xB0"),
      /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "0.85rem" } }, mainImage ? "Imagem equirretangular pronta para navega\xE7\xE3o 360\xB0 interativa." : "Fa\xE7a o upload de uma imagem panor\xE2mica na barra lateral.")
    ));
  }

  // src/save.js
  var import_block_editor2 = __toESM(require_block_editor());
  function save({ attributes }) {
    const {
      mediaType = "image-hotspots",
      mainImage = "",
      layers = [],
      hotspots = [],
      showQuizEvaluation = false,
      sliderValue = 50,
      panoramaAutoRotate = true
    } = attributes;
    const blockProps = import_block_editor2.useBlockProps.save({
      className: `luiz0067-media-hotspot mode-${mediaType}`,
      "data-media-type": mediaType,
      "data-quiz-eval": showQuizEvaluation ? "true" : "false"
    });
    return /* @__PURE__ */ React.createElement("div", { ...blockProps }, mediaType === "image-hotspots" && showQuizEvaluation && /* @__PURE__ */ React.createElement("div", { className: "luiz0067-quiz-bar" }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-quiz-title" }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-bullseye" }), /* @__PURE__ */ React.createElement("span", null, "Modo Avaliativo / Quiz")), /* @__PURE__ */ React.createElement("div", { className: "luiz0067-quiz-score" }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-trophy" }), /* @__PURE__ */ React.createElement("span", { className: "luiz0067-score-count" }, "0"), " /", " ", /* @__PURE__ */ React.createElement("span", { className: "luiz0067-total-correct" }, hotspots.filter((h) => h.isCorrectTarget).length || hotspots.length)), /* @__PURE__ */ React.createElement("button", { type: "button", className: "luiz0067-quiz-reset-btn", title: "Reiniciar" }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-rotate-left" }), " Reiniciar")), mediaType === "image-hotspots" && /* @__PURE__ */ React.createElement("div", { className: "luiz0067-media-viewport" }, mainImage ? /* @__PURE__ */ React.createElement("img", { src: mainImage, alt: "", className: "luiz0067-base-img" }) : /* @__PURE__ */ React.createElement("div", { className: "luiz0067-placeholder" }, "Selecione uma imagem no editor"), hotspots.map((spot, idx) => {
      const spotId = spot.id || `spot-${idx}`;
      const pinColor = spot.color || "#0d6efd";
      const pinIcon = spot.icon || "fa-solid fa-location-dot";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: spotId,
          type: "button",
          className: "luiz0067-hotspot-pin",
          style: {
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            backgroundColor: pinColor
          },
          "data-bs-toggle": "modal",
          "data-bs-target": `#luiz0067-modal-${spotId}`,
          "data-spot-id": spotId,
          "data-is-correct": spot.isCorrectTarget ? "true" : "false",
          "aria-label": spot.title || `Ponto ${idx + 1}`
        },
        /* @__PURE__ */ React.createElement("i", { className: pinIcon }),
        /* @__PURE__ */ React.createElement("span", { className: "luiz0067-pulse-ring", style: { borderColor: pinColor } }),
        spot.title && /* @__PURE__ */ React.createElement("span", { className: "luiz0067-pin-tooltip" }, spot.title)
      );
    })), mediaType === "image-hotspots" && hotspots.map((spot, idx) => {
      const spotId = spot.id || `spot-${idx}`;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: `modal-${spotId}`,
          className: "modal fade luiz0067-modal",
          id: `luiz0067-modal-${spotId}`,
          tabIndex: -1,
          "aria-labelledby": `luiz0067-modal-title-${spotId}`,
          "aria-hidden": "true"
        },
        /* @__PURE__ */ React.createElement("div", { className: "modal-dialog modal-dialog-centered" }, /* @__PURE__ */ React.createElement("div", { className: "modal-content" }, /* @__PURE__ */ React.createElement("div", { className: "modal-header" }, /* @__PURE__ */ React.createElement("h5", { className: "modal-title", id: `luiz0067-modal-title-${spotId}` }, /* @__PURE__ */ React.createElement("i", { className: spot.icon || "fa-solid fa-circle-info" }), /* @__PURE__ */ React.createElement("span", null, spot.title || `Ponto ${idx + 1}`)), /* @__PURE__ */ React.createElement(
          "button",
          {
            type: "button",
            className: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }
        )), /* @__PURE__ */ React.createElement("div", { className: "modal-body" }, spot.description ? /* @__PURE__ */ React.createElement("p", { className: "luiz0067-modal-desc" }, spot.description) : null, showQuizEvaluation && /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `luiz0067-quiz-feedback alert ${spot.isCorrectTarget ? "alert-success" : "alert-danger"} d-flex align-items-center gap-2 mt-3`
          },
          /* @__PURE__ */ React.createElement(
            "i",
            {
              className: `fa-solid ${spot.isCorrectTarget ? "fa-circle-check text-success" : "fa-circle-xmark text-danger"} fa-lg`
            }
          ),
          /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, spot.isCorrectTarget ? "Correto!" : "Incorreto!"), " ", spot.feedback || (spot.isCorrectTarget ? "Voc\xEA acertou o alvo pretendido." : "Este n\xE3o \xE9 o ponto solicitado. Tente novamente!"))
        )), /* @__PURE__ */ React.createElement("div", { className: "modal-footer" }, /* @__PURE__ */ React.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-secondary btn-sm",
            "data-bs-dismiss": "modal"
          },
          "Fechar"
        ))))
      );
    }), mediaType === "image-slider-layers" && /* @__PURE__ */ React.createElement("div", { className: "luiz0067-layers-container" }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-layer-frame" }, mainImage && /* @__PURE__ */ React.createElement("img", { src: mainImage, alt: "", className: "luiz0067-base-layer" }), layers.map((layer, lIdx) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: lIdx,
        className: "luiz0067-overlay-layer",
        "data-layer-index": lIdx,
        style: { opacity: lIdx === 0 ? 1 : 0 }
      },
      /* @__PURE__ */ React.createElement("img", { src: layer.url || layer, alt: layer.title || `Camada ${lIdx + 1}` })
    ))), /* @__PURE__ */ React.createElement("div", { className: "luiz0067-slider-panel" }, /* @__PURE__ */ React.createElement("div", { className: "luiz0067-slider-header" }, /* @__PURE__ */ React.createElement("span", null, "Controle de Camadas"), /* @__PURE__ */ React.createElement("span", { className: "luiz0067-current-layer-label" }, layers[0]?.title || "Camada 1")), /* @__PURE__ */ React.createElement("div", { className: "luiz0067-range-track-wrapper" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        className: "luiz0067-agamotto-slider",
        min: "0",
        max: Math.max(1, (layers.length || 1) - 1) * 100,
        defaultValue: "0",
        "data-layers-count": layers.length,
        "aria-label": "Controle de Camadas"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "luiz0067-layer-ticks" }, layers.map((layer, idx) => /* @__PURE__ */ React.createElement("span", { key: idx, className: "luiz0067-layer-tick-label" }, layer.title || `${idx + 1}`))))), mediaType === "panorama-360" && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "luiz0067-panorama-viewport",
        "data-panorama-src": mainImage,
        "data-auto-rotate": panoramaAutoRotate ? "true" : "false"
      },
      /* @__PURE__ */ React.createElement("div", { className: "luiz0067-panorama-hint" }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-arrows-up-down-left-right" }), /* @__PURE__ */ React.createElement("span", null, "Arraste para girar a visualiza\xE7\xE3o em 360\xB0")),
      /* @__PURE__ */ React.createElement("div", { className: "luiz0067-panorama-controls" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "luiz0067-pano-autorotate-btn",
          title: "Girar automaticamente"
        },
        /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-rotate" })
      ), /* @__PURE__ */ React.createElement("button", { type: "button", className: "luiz0067-pano-reset-btn", title: "Centralizar" }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-compass" }))),
      /* @__PURE__ */ React.createElement("canvas", { className: "luiz0067-panorama-canvas" })
    ));
  }

  // src/index.js
  (0, import_blocks.registerBlockType)(block_default.name, {
    edit: Edit,
    save
  });
})();
//# sourceMappingURL=index.js.map
