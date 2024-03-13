import { Example, readExample } from '@/app/helpers/example.helper';

export default async function Example(props: { example: Example }) {
  const example =  await readExample(props.example);

  return (
    <div className="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="eYomPLw"
         data-editable="true" data-user="drKaramazin"
         data-prefill='{"title":"ballet - multiscene","tags":[],"scripts":[],"stylesheets":["https://cdnjs.cloudflare.com/ajax/libs/reseter.css/2.0.0/reseter.min.css"]}'>
      <pre data-lang="html">{example.html}</pre>
      <pre data-lang="css">{example.css}</pre>
      <pre data-lang="typescript">{example.ts}</pre>
    </div>
  );
}