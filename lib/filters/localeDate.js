export default function localeDate (dateString) {
  const date = new Date(dateString)
  return date
    .toLocaleDateString('fr-FR', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
}
