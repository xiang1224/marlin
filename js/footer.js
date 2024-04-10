class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
  <footer>
        <div class="footer-container">
            <div class="footer-column">
                <img class="nylogo" src="img/NY-LOGO.png" alt="圖片1">
            </div>
            <div class="footer-column">
                <img src="img/icon.png" alt="圖片2">
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2023 MARINE 馬林改裝廠，保留所有權利。
        </div>
    </footer>
      `;
    }
}

customElements.define('my-footer', MyFooter)