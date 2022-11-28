import React, { useState } from 'react'



function Blog() {
  const [text, setText] = useState("")
  const handleClick=()=>{
    setText("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultriciesnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales,augue velit cursus nunc,"
 )
  }
  return (
    <>
      <h1 className='header' id='blog'>Blogs</h1>
      <div className='blog page' id='blog'>
        <p style={{fontSize:32}}>Here are my blogs</p>
        <p className='blog post'>
          This is a dummy blog post
        
          </p>
        <a
          className="blog-post"
          href={'https://dummy-blog-post-00.netlify.app/'}
          target="_blank"
          rel="noopener noreferrer"
        >

          <button className='btn' >Go to dummy blog</button>
        </a>

        <button className='btn' onClick={()=>handleClick()}>Read more</button><br/>
        {text}
      
    </div>
    
    </>
  )
}


export default Blog
