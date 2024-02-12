import './amazon.css';
import React, { useState } from 'react';

function Amazon() {
  const [Amazon, setAmazon] = useState([
    {
      name: 'Trending Top 10 on miniTV',
      imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
      imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
      imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      imgsrc4: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
    },
    {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
      {
        name: 'Trending Top 10 on miniTV',
        imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc1: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc2: 'https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg',
        imgsrc3: 'https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg',
      },
    
  ]);
  const scrollImages = (containerId, scrollOffset) => {
    const container = document.getElementById(containerId);
    container.scrollLeft += scrollOffset;
  };

  return (
    <div className="container">
        <div className='row'>
      {Amazon.map((product) => (
        <div >
          <div className="col-sm-12 m-4">
            <p style={{ color: 'white' }}>{product.name}</p>
          </div>
          
            <div className="d-flex" id='left'>
              <img className='mx-4' src={product.imgsrc} style={{ width: '220px' }} alt="pic" />
              <img className='mx-4' src={product.imgsrc1} style={{ width: '220px' }} alt="pic1" />
              <img className='mx-4' src={product.imgsrc2} style={{ width: '220px' }} alt="pic2" />
              <img className='mx-4' src={product.imgsrc3} style={{ width: '220px' }} alt="pic3" />
              <img className='mx-4' src={product.imgsrc4} style={{ width: '220px' }} alt="pic3" />
            </div>
            <div
                className="carousel-arrow left"
                onClick={() => scrollImages(`left`, -220)}
              >
                {/* You can use an icon or custom SVG here for the left arrow */}
                <i class="bi bi-arrow-right"></i>
      
                &lt;
              </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Amazon;
