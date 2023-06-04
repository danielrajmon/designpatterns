import Document from './document';

const originalDocument = new Document('Document', [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]);

const copiedDocument = originalDocument.clone();

console.log(originalDocument);
console.log(copiedDocument);
