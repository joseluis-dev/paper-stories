import DOMPurify from 'dompurify'

export const DompurifyContainer = ({ html = '' }) => {
  const sanitized = DOMPurify.sanitize(html)

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitized }}
    ></div>
  )
}
