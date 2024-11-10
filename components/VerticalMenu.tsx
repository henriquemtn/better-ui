interface VerticalMenuProps {
    title: string;
    item: { name: string, link: string, isActived?: boolean }[];
  }
  
  export default function VerticalMenu({ title, item }: VerticalMenuProps) {
    return (
      <>
        <h3 className='pb-2 font-semibold'>{title}</h3>
        <ul className='relative mb-2'>
          {item.map((menuItem, index) => (
            <li key={index}>
              <a
                href={menuItem.link}
                className={`block relative z-10 rounded-lg px-3 py-2 transition-colors duration-200 group
                  ${menuItem.isActived ? 'text-indigo-900 font-medium' : 'hover:bg-zinc-100 hover:text-zinc-900'}
                `}
              >
                <span className={`pl-6 py-2 border-l-[2px] ${menuItem.isActived ? 'border-indigo-500 border-l-[2px]' : 'border-transparent'} transition duration-200`}>
                  {menuItem.name}
                </span>
              </a>
              <div
                className={`absolute left-3 top-0 w-px h-full transition-all duration-200 
                  ${menuItem.isActived ? 'bg-indigo-500' : 'bg-zinc-200'}
                `}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
  