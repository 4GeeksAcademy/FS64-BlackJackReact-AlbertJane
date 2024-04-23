# BlackJack con React

##Como iniciar el juego?

Entra a la carpeta blackjack y ejecuta el servidor de pruebas
```
cd blackjack/
npm install
npm run dev
```

##Normas del juego

pide cartas con el botón hit hasta acercarte a 21 puntos, cunado le des al botón stand, pasará al turno del Croupier.
El croupier está obligado a pedir cartas cuando tenga 16 puntos o menos, cuando pase esa cifra, parará.
###Victoria
Ganarás si no te pasas de 21 y tienes más puntos que el croupiere
###Empate
Empataréis si los dos tenéis los mismos puntos y estos són 21 o menos.
###Derrota
Perderás si te pasas de 21 o el Croupier acaba con más puntos que tú sin pasarse de 21.
