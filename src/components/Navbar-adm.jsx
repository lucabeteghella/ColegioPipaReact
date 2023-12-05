import { useRef } from 'react';
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar-adm.css";
import AuthService from './AuthService';


function NavbarAdm() {
    const navRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = AuthService;
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > -100) { // Ajuste o valor conforme necessário para definir a posição de deslocamento
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <h3 className='logo'>Colégio <span>Pipa</span></h3>
            <nav ref={navRef}>
                <a href="/home" title="Ir para a página de Início">Início </a>
                <a href="/posts/create" title="Criar um novo post">Novo Post</a>
                <a href="/dashboard-posts" title="Dashboard Conteúdo">Gerenciar Conteúdo</a>
                <a href="/register/create" title="Cadastrar Responsáveis">Cadastrar Usuários</a>
                <a href="/dashboard-users" title="Gerenciar Responsáveis">Gerenciar Usuários</a>
                <a href="/" title="Sair" onClick={logout}>Sair</a>
                <button
                    type='button'
                    title="Fechar menu"
                    className='nav-btn nav-close-btn'
                    onClick={showNavbar}
                >
                  <FaTimes/>
                </button>
            </nav>
            <button
                type='button'
                 title='Abrir menu'
                className='nav-btn'
                onClick={showNavbar}
            >
              <FaBars />
            </button>
        </header>
    );
};

export default NavbarAdm;