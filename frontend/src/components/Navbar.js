import logo from '../imgs/ob-logo.png';
import { useNavigate } from "react-router-dom";
import logo2 from '../imgs/img3.png';

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="my-navbar d-flex float-left gap-4">

            <div className="d-flex float-left gap-4 align-items-center">
                <div onClick={() => navigate('/')}><img src={logo} className='logo' alt="logo"/></div>
                <div class="dropdown">
                    <button class="cat-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kategoriler
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/kadin">Kadın</a></li>
                        <li><a class="dropdown-item" href="/erkek">Erkek</a></li>
                        <li><a class="dropdown-item" href="/cocuk">Çocuk</a></li>
                    </ul>
                </div>
                <a href="/indirimler">İndirim</a>
                <a href="/blog">Blog</a>

            </div>

            <div className="d-flex float-left gap-4">
                <input
                    type="text" className="ara-input"
                    placeholder="Ara"
                />
                <button className="btn btn-danger" onClick={() => navigate(`/kayit`)}>Kayıt Ol</button>
                <button className="btn btn-success" onClick={() => navigate(`/giris`)}>Giriş Yap</button>
            </div>

            <div className="d-flex float-left gap-4 align-items-center">
                <div><img src={logo2} className='logo2' alt="logo2"/></div>
                <div class="dropdown">
                    <button class="cat-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hesabım
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/favorilerim">Favorilerim ♡</a></li>
                        <li><a class="dropdown-item" href="/sepetim">Sepetim 🛒</a></li>
                    </ul>
                </div>
            </div>


        </div>
    );
}

export default Navbar;