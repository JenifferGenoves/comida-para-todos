import React from 'react';
import "../App.css";
import InstagramEmbed from 'react-instagram-embed';



const Insta = () => {
  return (
    <section className='container-ig'>
      <h2 className='textContainer'>Últimos Post</h2>
      <div className="App">
        <InstagramEmbed className="ig"
          url='https://www.instagram.com/p/CFxQ1Kwnk9F/'
          maxWidth={500}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
        <InstagramEmbed className="ig"
          url='https://www.instagram.com/p/CFu81r5Hvdz/'
          maxWidth={500}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
        <InstagramEmbed className="ig"
          url='https://www.instagram.com/p/CFp2u5AnT8H/'
          maxWidth={500}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
      </div>
    </section>
  );
}
export default Insta;