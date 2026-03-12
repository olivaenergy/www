export function formatBody(text: string): string
{
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  for (const line of lines)
  {
    if (line.trim().startsWith('- '))
    {
      if (!inList)
      {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${line.trim().substring(2)}</li>`;
    }
    else
    {
      if (inList)
      {
        html += '</ul>';
        inList = false;
      }
      if (line.trim() !== '') html += `<p>${line}</p>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
}
