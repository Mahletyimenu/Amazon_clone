import React,{useState,useEffect} from 'react';
import Product from '../Product/Product.js';
import './Home.css';
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const Home = () => {

    const Banners = [
        {
            img: "https://m.media-amazon.com/images/I/61excEMCTqL._SX3000_.jpg",
        },
        {
            img:'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg',
        },
        {
            img: "https://m.media-amazon.com/images/I/61FJZ0nk3ML._SX3000_.jpg",
        },
        {
            img: "https://m.media-amazon.com/images/I/71KuCM0tOhL._SX3000_.jpg",
        },
        {
            img: "https://m.media-amazon.com/images/I/61KUup51rjL._SX1500_.jpg",
        },
        {
            img: "https://m.media-amazon.com/images/I/51+9uPXVdNL._SX1500_.jpg",
        },
    ];

    const [index, setindex] = useState(0);
    const [src, setsrc] = useState(Banners[index].img);

    return (
        <div>
            <div className='home'>
                <div className='home_container'>
                    
                    <img
                    className='home_image'
                    src={src}
                    alt=""
                    />
                    <ChevronLeftOutlinedIcon
                        sx={{ fontSize: "80px", fontWeight: "200" }}
                        className="banner_lefticon"
                        onClick={() => {
                            if(index > 0){
                                setindex(index-1);
                            }else{
                                setindex(0);
                            }
                            setsrc(Banners[index].img);
                        }}
                    />
                    <ChevronRightOutlinedIcon
                        sx={{ fontSize: "80px", fontWeight: "200" }}
                        className="banner_righticon"
                        onClick={() =>  {
                            if(index < Banners.length-1){
                                setindex(index+1);
                            }else{
                                setindex(Banners.length-1);
                            }
                            setsrc(Banners[index].img);
                        }}
                    />
                    <div className="home_row">
                        <Product
                            id="4903850"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={243.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81w7ej+WBlL._AC_SY200_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={123.59}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71bSniLIIqL._AC_SY200_.jpg"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={48.22}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81IPJqjBjkL._AC_SY200_.jpg"
                        />
                    </div>
        
                    <div className='home_row'>
                        <Product
                            id="12321341"
                            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        />
                        <Product
                            id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239.0}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id="4903850"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={199.99}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                    </div>

                    <div className="home_row">
                        <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />
                    
                    </div>
                </div>
    
            </div> 
            
        </div>
    );
}

export default Home;
