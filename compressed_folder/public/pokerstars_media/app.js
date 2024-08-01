// app.js
document.addEventListener('DOMContentLoaded', function () {
    // Define individual tab components
    Vue.component('tab1', {
        template: `
            <div class="tab active">
                <h1>Tab 1</h1>
                <p>Content for Tab 1</p>
            </div>
        `
    });

    Vue.component('tab2', {
        template: `
            <div class="tab active">
                <h1>Tab 2</h1>
                <p>Content for Tab 2</p>
            </div>
        `
    });

    Vue.component('tab3', {
        template: `
            <div class="tab active">
                <h1>Tab 3</h1>
                <p>Content for Tab 3</p>
            </div>
        `
    });

    Vue.component('tab4', {
        template: `
            <div class="tab active">
                <h1>Tab 4</h1>
                <p>Content for Tab 4</p>
            </div>
        `
    });

    // Initialize Vue.js
    new Vue({
        el: '#app',
        data: {
            currentTab: 0,
            tabs: [ 'Tab1', 'Tab2', 'Tab3', 'Tab4' ] // Not really used but kept for potential extension
        },
        methods: {
            prevTab() {
                if (this.currentTab > 0) {
                    this.currentTab--;
                }
            },
            nextTab() {
                if (this.currentTab < this.tabs.length - 1) {
                    this.currentTab++;
                }
            }
        }
    });
});
