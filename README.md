# luiz0067-media-hotspot

[![WordPress](https://img.shields.io/badge/WordPress-6.0%2B-blue.svg)](https://wordpress.org)
[![Gutenberg](https://img.shields.io/badge/Gutenberg-Block%20v3-green.svg)](https://developer.wordpress.org/block-editor/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.5-orange.svg)](https://fontawesome.com)
[![License](https://img.shields.io/badge/license-GPL--2.0--or--later-blue.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

Plugin de bloco Gutenberg avançado para WordPress desenvolvido seguindo a **arquitetura luiz0067**. Apresenta mídias interativas com **Pontos Clicáveis (Hotspots)** em coordenadas percentuais (`X%`, `Y%`), **Camadas Deslizantes (estilo Agamotto / Antes e Depois)** e **Panorama 360° Interativo**, acompanhados de modais nativas Bootstrap 5, marcadores Font Awesome pulsantes em CSS, sistema de avaliação (quiz) com síntese sonora via Web Audio API e suporte completo a internacionalização (i18n).

---

## 📸 Demonstração Visual das Abas e Situações

### 1. Aba 1: Pontos de Interesse Clicáveis (Hotspots) & Modo Quiz Avaliativo

Apresenta imagem principal com marcadores Font Awesome pulsantes posicionados via coordenadas percentuais relativas (`left: X%; top: Y%`), acompanhados de barra superior de pontuação com contador dinâmico e botão de reinício.

#### Situação 1A: Visualização Geral com Hotspots Pulsantes
<p align="center">
  <img src="./screenshot-hotspots.png" alt="Aba 1 - Pontos Clicáveis Hotspots e Modo Quiz" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 1.5rem;" />
</p>

#### Situação 1B: Ponto Clicado — Modal Bootstrap 5 com Feedback de Acerto
Ao clicar em um ponto correto, abre-se a janela modal nativa Bootstrap 5 (`modal fade`, `modal-dialog-centered`). O bloco avalia a resposta em tempo real, emite feedback positivo (`.alert-success`), sintetiza acorde sonoro harmônico via Web Audio API e incrementa o placar.
<p align="center">
  <img src="./screenshot-modal.png" alt="Aba 1 - Modal Bootstrap 5 com Feedback de Acerto" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 1.5rem;" />
</p>

#### Situação 1C: Ponto Clicado — Modal com Feedback de Alvo Incorreto (Distrator)
Ao clicar em um ponto distrator, o marcador treme visualmente (`.shake`), a modal exibe alerta corretivo (`.alert-danger`) e o sistema emite efeito sonoro descendente, orientando o usuário a tentar novamente.
<p align="center">
  <img src="./screenshot-modal-erro.png" alt="Aba 1 - Modal Bootstrap 5 com Feedback de Alvo Incorreto" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 2rem;" />
</p>

---

### 2. Aba 2: Camadas Deslizantes (Estilo Agamotto / Antes e Depois)

Permite a transição suave de opacidade entre múltiplas camadas de imagens sobrepostas através de um controle deslizante contínuo (range slider). Ideal para comparações temporais históricas, evolução de projetos, esboço técnico vs. arte final ou visão raio-X/térmica.

#### Situação 2A: Posição Inicial — Camada 1: Esboço Técnico (Blueprint)
<p align="center">
  <img src="./screenshot-agamotto.png" alt="Aba 2 - Camadas Deslizantes Agamotto Estado Inicial" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 1.5rem;" />
</p>

#### Situação 2B: Transição Avançada — Camada 2: Renderização de Arte Final
<p align="center">
  <img src="./screenshot-agamotto-transicao.png" alt="Aba 2 - Transição de Camada Agamotto Arte Final" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 2rem;" />
</p>

---

### 3. Aba 3: Visualizador de Panorama 360° Interativo

Projeção equirretangular contínua renderizada diretamente em HTML5 Canvas. Conta com navegação fluida por clique e arraste (mouse ou touch), botão de rotação automática suave (`auto-rotate`) e botão de bússola para centralização instantânea do ângulo de visão.

#### Situação 3A: Projeção Panorâmica Contínua em Canvas
<p align="center">
  <img src="./screenshot-panorama.png" alt="Aba 3 - Panorama 360 Interativo" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 2rem;" />
</p>

---

### 4. Aba 4: Simulador WYSIWYG do Editor Gutenberg

Demonstra o fluxo exato de edição no WordPress (`edit.js`): o editor clica em qualquer coordenada da imagem no canvas para fixar instantaneamente novos pontos percentuais `(X%, Y%)`. O painel lateral Inspector sincroniza em tempo real título, cor do marcador, ícone e descrição da modal.

#### Situação 4A: Coordenadas Reativas e Painel Lateral do Inspector
<p align="center">
  <img src="./screenshot-editor.png" alt="Aba 4 - Simulador do Editor Gutenberg" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 2rem;" />
</p>

---

## 🔍 Detalhamento Arquitetural de Cada Aba

### Aba 1: Hotspots & Quiz Avaliativo (`image-hotspots`)
- **Posicionamento Responsivo em `%`**: Os pontos são ancorados com `left: X%` e `top: Y%` sobre o container relativo da imagem. Em qualquer resolução de tela ou dispositivo móvel, os marcadores acompanham proporcionalmente as dimensões da imagem base, sem perda de alinhamento.
- **Animação Pulsante em CSS (`@keyframes luiz0067-pulse`)**: Marcadores recebem anéis concêntricos que pulsam continuamente via aceleração por hardware (GPU), mantendo taxa de 60 FPS estável.
- **Modais Nativas Bootstrap 5 com Fallback Vanilla JS**:
  - Utiliza a estrutura padrão HTML5 `modal fade` e `modal-dialog-centered`.
  - Possui motor de fallback nativo integrado em [`src/view.js`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/src/view.js): caso o tema ativo não carregue o script JS do Bootstrap, a abertura, o backdrop, o fechamento via `[data-bs-dismiss="modal"]` e a tecla `Escape` funcionam perfeitamente sem gerar erros no console.
- **Mecanismo de Avaliação (Quiz)**:
  - O atributo `showQuizEvaluation` ativa a barra superior com contador de alvos e troféu de pontuação.
  - Alvos corretos (`isCorrectTarget: true`) disparam a classe `.is-correct` com micro-animação de confirmação e incrementam o placar (`foundCorrect.add(spotId)`).
  - Alvos incorretos disparam a classe `.is-incorrect` com tremor visual (`shake`).
  - Botão de reinício restaura todos os marcadores e zera a pontuação instantaneamente.
- **Síntese Sonora Nativa (Web Audio API)**:
  - Efeito de sucesso: duas frequências harmônicas em onda senoidal (C5 ➔ G5) geradas proceduralmente pelo navegador.
  - Efeito de erro: onda triangular descendente com decaimento suave.
  - Zero requisições HTTP adicionais ou arquivos de áudio externos.

---

### Aba 2: Camadas Deslizantes Agamotto (`image-slider-layers`)
- **Sobreposição Multicamadas Hierárquica**:
  - Suporta de 2 a N camadas organizadas em array.
  - A primeira camada atua como base estática (`luiz0067-base-layer`).
  - As camadas subsequentes (`luiz0067-overlay-layer`) possuem opacidade calculada de forma fracionária.
- **Interpolação Fracionária Linear (Cross-Fade)**:
  - Ao deslizar o cursor do range slider (`0` a `(N-1) * 100`), o script calcula o progresso fracionário entre a camada `(i - 1)` e a camada `i`.
  - A camada anterior permanece estável enquanto a camada atual surge gradualmente (`opacity: fraction`), garantindo transição sem cortes bruscos.
- **Indicador Dinâmico de Etapas**:
  - Atualiza em tempo real o rótulo descritivo da camada em exibição (`luiz0067-current-layer-label`).
  - Linha de marcações (ticks) com os títulos de cada fase abaixo do controle deslizante.

---

### Aba 3: Panorama 360° Interativo (`panorama-360`)
- **Renderização Equirretangular em HTML5 Canvas**:
  - O canvas desenha a projeção esférica com repetição modular em X (`ctx.drawImage` duplicando o corte de imagem conforme o giro ultrapassa a largura total).
  - Permite rotação horizontal contínua de 360° sem emendas ou reinícios perceptíveis.
- **Controle por Arraste com Inércia (Mouse & Touch)**:
  - Suporta clique e arraste no desktop e gestos de toque em smartphones e tablets.
  - Amortecimento inercial suave (`targetYaw` e `targetPitch` com interpolação de 10% por frame via `requestAnimationFrame`).
  - Trava angular vertical (`pitch clamped` entre -60° e +60°) para evitar inversão do horizonte e distorção excessiva nos polos.
- **Controles de Apoio**:
  - Botão de rotação automática contínua (`auto-rotate`).
  - Botão de bússola para centralização instantânea das coordenadas de mira.

---

### Aba 4: Simulador do Editor Gutenberg (`edit.js`)
- **Fixação Direta com Cálculo Vetorial de Coordenadas**:
  - Ao clicar na imagem base, o editor calcula instantaneamente a posição relativa percentual:
    $$\text{coordX} = \frac{\text{clientX} - \text{rect.left}}{\text{rect.width}} \times 100$$
    $$\text{coordY} = \frac{\text{clientY} - \text{rect.top}}{\text{rect.height}} \times 100$$
  - Elimina a necessidade de medições manuais e tentativa e erro.
- **Painel Lateral de Inspeção (InspectorControls)**:
  - Edição instantânea de título, categoria, cor do marcador (paleta temática), ícone Font Awesome e conteúdo detalhado da modal.
  - Destaque visual dourado (`is-selected`) no ponto sob edição ativa com crachá de coordenadas flutuante.
  - Remoção de pontos individuais com reindexação automática.

---

## 📦 Estrutura de Arquivos

```text
luiz0067-media-hotspot/
├── block.json                       # Metadados oficiais do bloco Gutenberg (v3)
├── build.js                         # Compilador esbuild + Sass
├── package.json                     # Metadados e dependências NPM
├── luiz0067-media-hotspot.php       # Ponto de entrada do plugin WordPress
├── preview.html                     # Vitrine interativa independente (Showcase com as 4 abas)
├── screenshot.png                   # Imagem principal de destaque do projeto
├── screenshot-hotspots.png          # Aba 1: Imagem base com pontos pulsantes e quiz
├── screenshot-modal.png             # Aba 1: Modal Bootstrap 5 com feedback de acerto
├── screenshot-modal-erro.png        # Aba 1: Modal Bootstrap 5 com feedback de distrator/erro
├── screenshot-agamotto.png          # Aba 2: Camada 1 - Esboço técnico (Blueprint)
├── screenshot-agamotto-transicao.png# Aba 2: Camada 2 - Renderização de arte final
├── screenshot-panorama.png          # Aba 3: Visualizador contínuo Panorama 360°
├── screenshot-editor.png            # Aba 4: Simulador WYSIWYG do Editor Gutenberg
├── languages/                       # Text domain e internacionalização do plugin
│   ├── pt-br.json                   # Português do Brasil
│   ├── en-us.json                   # Inglês (US)
│   ├── it.json                      # Italiano
│   └── es.json                      # Espanhol
├── src/
│   ├── index.js                     # Registro do bloco com registerBlockType
│   ├── edit.js                      # Interface WYSIWYG com clique direto na imagem
│   ├── save.js                      # Marcação HTML estática com modais Bootstrap 5
│   ├── view.js                      # Controlador frontend (quiz, slider, panorama, som)
│   ├── i18n.js                      # Utilitário de tradução dinâmica com fallback
│   ├── style.scss                   # Estilos frontend (pulso, slider, panorama, modais)
│   └── editor.scss                  # Estilos específicos da interface do editor
└── build/                           # Artefatos compilados para produção
    ├── index.js                     # Script do editor empacotado
    ├── index.css                    # CSS do editor compilado
    ├── view.js                      # Script frontend empacotado
    └── style-index.css              # CSS frontend compilado
```

---

## ⚙️ Atributos do Bloco (`block.json`)

| Atributo | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `mediaType` | `string` | `'image-hotspots'` | Modo ativo: `'image-hotspots'`, `'image-slider-layers'` ou `'panorama-360'` |
| `mainImage` | `string` | `""` | URL da imagem principal ou imagem equirretangular 360° |
| `layers` | `array` | `[]` | Array de objetos com as camadas do Agamotto (`{ url, title }`) |
| `hotspots` | `array` | `[]` | Array de hotspots (`{ id, x, y, title, description, isCorrectTarget, feedback, icon, color }`) |
| `showQuizEvaluation` | `boolean` | `false` | Ativa a barra de pontuação e validação de acerto/erro |
| `sliderValue` | `number` | `50` | Posição inicial do controle deslizante de camadas |
| `panoramaAutoRotate` | `boolean` | `true` | Habilita a rotação automática contínua no modo panorama 360° |

---

## 🚀 Instalação e Desenvolvimento

### 1. Clonar o repositório no diretório de plugins do WordPress
```bash
cd wp-content/plugins/
git clone https://github.com/luiz0067/luiz0067-media-hotspot.git
cd luiz0067-media-hotspot
```

### 2. Instalar dependências e compilar
```bash
npm install
npm run build
```

### 3. Modo de desenvolvimento com recarregamento contínuo
```bash
npm run dev
```

### 4. Ativação no Painel WordPress
Acesse o painel administrativo em **Plugins > Plugins Instalados** e clique em **Ativar** no plugin **Luiz0067 Media Hotspot**.

---

## 🌐 Internacionalização (i18n)

Todas as strings do bloco foram organizadas e traduzidas na pasta [`languages/`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/languages):
- **Português (Brasil)**: [`languages/pt-br.json`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/languages/pt-br.json)
- **Inglês**: [`languages/en-us.json`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/languages/en-us.json)
- **Italiano**: [`languages/it.json`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/languages/it.json)
- **Espanhol**: [`languages/es.json`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/languages/es.json)

O plugin carrega as traduções nativamente via `load_plugin_textdomain` no PHP e via [`src/i18n.js`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/src/i18n.js) no JavaScript, detectando automaticamente o idioma do WordPress ou navegador com fallback para português.

---

## 🧪 Demonstração Rápida no Navegador

Para testar todos os 3 modos (`Hotspots & Quiz`, `Camadas Agamotto`, `Panorama 360°`) e o **Simulador do Editor Gutenberg**, abra o arquivo [`preview.html`](file:///c:/Users/usuario/Documents/GitHub/luiz0067-media-hotspot/preview.html) diretamente no navegador:

- `preview.html?tab=hotspots` — Aba 1: Pontos Clicáveis & Quiz
- `preview.html?tab=hotspots&modal=api` — Aba 1: Com Modal Nativa Bootstrap 5 aberta e feedback de acerto
- `preview.html?tab=hotspots&modal=firewall` — Aba 1: Com Modal aberta e feedback de erro/distrator
- `preview.html?tab=agamotto&slider=0` — Aba 2: Camada 1 (Blueprint)
- `preview.html?tab=agamotto&slider=100` — Aba 2: Camada 2 (Arte Final)
- `preview.html?tab=panorama` — Aba 3: Panorama 360° interativo
- `preview.html?tab=editor` — Aba 4: Simulador WYSIWYG do Editor Gutenberg

---

## 👨‍💻 Autor

**Luiz Fernando Brogliatto Ferreira**
- **WordPress.org**: [@luiz0067](https://profiles.wordpress.org/luiz0067/)
- **GitHub**: [@luiz0067yahoo](https://github.com/luiz0067yahoo)
- **LinkedIn**: [https://www.linkedin.com/in/luiz-ferreira-260277379/](https://www.linkedin.com/in/luiz-ferreira-260277379/)

---

## 📄 Licença

Este plugin é distribuído sob a licença [GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html).
