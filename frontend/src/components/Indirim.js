import { useLocation } from "react-router-dom";
import imgURL from '../imgs/erkek/1.jpg'
import imgURL1 from '../imgs/erkek/2.jpg'
import imgURL2 from '../imgs/kadin/1.jpg'
import imgURL3 from '../imgs/kadin/2.jpg'
import imgURL4 from '../imgs/cocuk/1.jpg'
import imgURL5 from '../imgs/cocuk/2.jpg'

function Indırım() {
    const location = useLocation();
    const prodData = location.state && location.state.prodData;

    const bedenler = prodData.beden.join(", ");
    const renkler = prodData.renk.join(", ");

    return (
        <div key={prodData.id} className="tek-urun-page d-flex align-items-center justify-content-center gap-5">
            <div><img className="single-product-img" src={imgURL} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>



            <div><img className="single-product-img" src={imgURL1} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>



            <div><img className="single-product-img" src={imgURL2} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>



            <div><img className="single-product-img" src={imgURL3} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>



            <div><img className="single-product-img" src={imgURL4} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>



            <div><img className="single-product-img" src={imgURL5} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>
        </div>
    )
}
export default Indırım;