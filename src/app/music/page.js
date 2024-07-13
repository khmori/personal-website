import Album from '../components/Album'

const page = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div>here are some albums that i like:</div>

        <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between items-center gap-7 md:gap-4'>
          <Album title='98.12.28 男達の別れ' artist='Fishmans' image='/981228.png' link='https://youtu.be/ftRK6fzX-Uo?si=Rw5WIfigTp6gKB6k'></Album>
          <Album title='In This World' artist='susquatch' image='/inthisworld.png' link='https://youtu.be/amdBEY6O8io?si=4YD-q2jDEkhxLRlu'></Album>
          <Album title='救済の技法' artist='平沢進' image='/kyuusainogihou.png' link='https://youtu.be/xhZYGuUGvUA?si=bcxyVIOLyscOD1wl'></Album>
          <Album title='lust' artist='rei harakami' image='/lust2.png' link='https://youtu.be/wC1z9sNSaXo?si=RmHIG3o_Xr8gAM02'></Album>
        </div>


        {/* <div className='flex flex-row justify-between items-center'>
          <Album title='98.12.28 男達の別れ' artist='Fishmans' image='/981228.png' link='https://youtu.be/ftRK6fzX-Uo?si=Rw5WIfigTp6gKB6k'></Album>
          <Album title='In This World' artist='susquatch' image='/inthisworld.png' link='https://youtu.be/amdBEY6O8io?si=4YD-q2jDEkhxLRlu'></Album>
        </div>

        <div className='flex flex-row justify-between items-center'>
          <Album title='救済の技法' artist='平沢進' image='/kyuusainogihou.png' link='https://youtu.be/xhZYGuUGvUA?si=bcxyVIOLyscOD1wl'></Album>
          <Album title='lust' artist='rei harakami' image='/lust2.png' link='https://youtu.be/wC1z9sNSaXo?si=RmHIG3o_Xr8gAM02'></Album>
        </div> */}

    </div>
  )
}

export default page