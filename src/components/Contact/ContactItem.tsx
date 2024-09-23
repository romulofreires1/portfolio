import { Contact } from '@/types/Contact';
import Image from 'next/image';

const ContactItem = ({ contact }: { contact: Contact }) => {
  const { name, link, icon } = contact;
  return (
    <li key={name}>
      <div className="flex gap-x-2">
        <Image
          src={icon}
          width={0}
          height={0}
          alt={`ícone ${name}`}
          className="w-6 h-6"
        />
        <span className="font-bold">{name}</span>
      </div>
      <div className="flex gap-1 md:gap-3 items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-lg text-slate-300 underline truncate"
        >
          {link}
        </a>
      </div>
    </li>
  );
};

export default ContactItem;
