<!-- # React + TypeScript + Vite -->

# Reto alimentatect

- para instalar las dependencias
```js
npm i
```
- para correr la app "npm run dev"

## El reto consiste en optimizar el renderizado del componente "ListPokemones.tsx" para que solo sea renderizado cuando sus propiedades cambien

- Cuando cambien el estado (incrementar el numero) al dar clic sobre uno de los botones de las cards se renderiza nuevamente el componente "ListPokemones.tsx", esto se puede evidenciar viendo la consola, donde se ve que se ejecuta un console.log "ListPokemones" 

- Usando los conceptos aprendidos de useMemo, React.memo, useCallback deben de optimizar la renderización del componente "ListPokemones.tsx"
