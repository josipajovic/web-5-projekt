1. interpolation/one-way binding
Implementirano. Na primjer: src/components/ListComponent.vue:4,14, src/components/MovieComponent.vue:7,11,15
2. two-way binding
Implementirano. Na primjer: src/views/Catalog.vue:3,29,44 - searchQuery
3. methods
Implementirano. Na primjer: src/views/Catalog.vue:33, src/views/WatchList.vue:36, src/views/MovieDetail.vue:59 itd.
4. computed properties
Implementirano. Na primjer: src/views/Catalog.vue:42, src/views/MovieDetail.vue:55
5. barem jedan scoped style
Implementirano. Na primjer: src/components/ListComponent.vue:56, src/components/MovieComponent.vue:41
6. koristiti barem jedan lifecycle hook
Implementirano. Na primjer: src/views/Catalog.vue:37, src/views/MovieDetail.vue:49
7. routing (više stranica)
Implementirano. Aplikacija ima rute "/", "/movie/:id" (za svaki film), "/watchlist" - src/router/index.js.
    - aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
        Implementirano.
    - dinamičko usmjeravanje s 404 stranicom ("catch all")
        Implementirano, Na primjer src/router/index.js:19,30, src/views/NotFound.vue
8. (barem) dvije komponente
Implementirano. Komponente: src/components/ListComponent.vue, src/components/MovieComponent.vue
komponenta bez stanja, koristiti properties - rc/components/MovieComponent.vue:7,11,15,31,38
komponenta sa stanjem - src/components/ListComponent.vue:37,40,44,48
9. barem jedna komponenta mora emitirati barem jedan event
Implementirano - src/components/ListComponent.vue:17
10. store (Pinia)
Implementirano. src/stores/dataStore.js, src/main.js:20-22
11. asinkroni dohvat podataka s backenda, možete:
Implementirano, korišten Mocky za vraćanje json podataka - src/stores/dataStore.js:14
Lazy učitavanje stranica - src/router/index.js:7,12,26,32
