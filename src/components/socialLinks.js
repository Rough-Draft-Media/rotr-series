import Link from 'next/link'

const socials = [
    { name: 'vimeo', href: '/' },
    { name: 'youtube', href: 'https://www.instagram.com/canitellyousmthpodcast/' },
    { name: 'imdb', href: '/' },
]

export default function SocialLinks() {
    function iconClass(name) {
        return `bx bxl-${name} bx-sm`
    }

    return (
        <div className="flex flex-row items-center px-3">
        {socials.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={'text-zinc-100 hover:bg-zinc-100/30 h-11 w-11 rounded flex items-center justify-center'}
          >
            <i className={iconClass(item.name)}></i>
          </Link>
        ))}
      </div>
    )
}