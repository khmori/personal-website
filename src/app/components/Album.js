const Album = ({ title, artist, image, link }) => {
  return (
    <div className="flex flex-col max-w-[250px] text-center">
      <span>{title}</span>
      <span>{artist}</span>
      <a href={link}><img src={image}/></a>
    </div>
  )
}

export default Album