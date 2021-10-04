export const customComponentSnippet = `<ReactHover
  options={optionsCursorTrueWithMargin}>
  <Trigger type='trigger'>
    <TriggerComponent />
  </Trigger>
  <Hover type='hover>
    <HoverComponent />
    </Hover>
 </ReactHover>
 `
export const plainCodeSnippet = `<ReactHover options={optionsCursorTrueWithMargin}>
   <Trigger type='trigger'>
      <h1 style={{ background: '#44B39D', width: '200px', fontSize: '1.5em', color: 'white' }}> <p>Hover on me</p></h1>
   </Trigger>
   <Hover type='hover'>
      <div className={componentstyles.hover}>
        <img className={componentstyles.thumbnail} alt="Albert Einstein" src="https://images.gr-assets.com/authors/1429114964p2/9810.jpg" />
        <blockquote className={componentstyles.quote}> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </blockquote>
        <p className={componentstyles.people}>--Albert Einstein</p>
      </div>
   </Hover>
</ReactHover>
`
