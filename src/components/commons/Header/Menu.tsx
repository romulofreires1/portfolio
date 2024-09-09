import Link from 'next/link';

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  // Adicionar uma ref para capturar a altura do header se ela não for fixa
  return (
    <div className={`fixed inset-x-0 top-16 h-full bg-black-velvet bg-opacity-40 md:hidden transform ${isVisible ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"} transition-all duration-400 ease-in-out`} onClick={onClose}>
      <nav className="flex flex-col gap-5 text-xl p-5 items-center">
        <Link className="hover:text-neon-spring" href="/" onClick={onClose}>
          <span>Sobre</span>
        </Link>
        <Link className="hover:text-neon-spring" href="/contatos" onClick={onClose}>
          <span>Contato</span>
        </Link>
      </nav>
    </div>
  );
};
