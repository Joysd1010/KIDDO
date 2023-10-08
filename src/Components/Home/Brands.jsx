import React from 'react';
import Marquee from 'react-fast-marquee';
const Brands = () => {

    return (
        <div className='py-3'>
            <div>
                <h1 className='text-center font-bold text-3xl text-blue-600'>Our Partnership Brands</h1>
            </div>
            <hr className='border-2 border-gray-600 w-1/3 mx-auto mt-2'/>
            <div>
                <Marquee pauseOnHover={true}>
<div>
    <img className='w-40' src="https://pbs.twimg.com/profile_images/1159792027/Megalogo2_400x400.jpg" />
</div>
<div>
    <img className='w-40' src="https://cdn6.f-cdn.com/contestentries/1345716/25885967/5b1bf850245b6_thumb900.jpg" />
</div>
<div>
    <img className='w-40' src="https://static.brandirectory.com/logos/fise001_fisher_price_logo_2020.png" />
</div>
<div>
    <img className='w-40' src="https://images-platform.99static.com//jZDMjog_ehY68oQ1vbDGVMSrebY=/17x15:945x943/fit-in/500x500/99designs-contests-attachments/62/62129/attachment_62129397" />
</div>
<div>
    <img className='w-40' src="https://cdn.dribbble.com/userupload/5591713/file/original-7e93a60f08a7ac70fe06a5dc75611b21.png?resize=752x" />
</div>
<div>
    <img className='w-40' src="https://pngimg.com/d/lego_PNG28.png" />
</div>
<div>
    <img className='w-40' src="https://1000logos.net/wp-content/uploads/2020/09/Hasbro-logo.jpg" />
</div>
<div>
    <img className='w-40' src="https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/brandyuva.in/wp-content/uploads/2017/09/chicco-toy-logo.png" />
</div>
<div>
    <img className='w-40' src="https://static.brandirectory.com/logos/plah002_5a1c365af65d84088faf1401.png" />
</div>

                </Marquee>
            </div>
        </div>
    );
};

export default Brands;