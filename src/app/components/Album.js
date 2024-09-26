import Image from 'next/image'

const Album = ({ title, artist, image, link }) => {
  return (
    <div className="flex flex-col max-w-[250px] text-center">
      <span>{title}</span>
      <span>{artist}</span>
      <a href={link}>
        <Image alt={`${title} by ${artist}`} width={250} height={250} src={image}/></a>
    </div>
  )
}

export default Album