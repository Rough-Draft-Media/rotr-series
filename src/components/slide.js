import NextButton from '@/components/nextButton'
import Image from 'next/image'

export default function Slide(props) {

    return (
        <div id={props.current} className="relative h-screen w-full">
            <Image
                className="absolute top-0 left-0"
                src={props.bg}
                alt="Decorative background image"
                layout="fill"
                objectFit="cover"
            />
            <div className="flex flex-col h-full w-full justify-center items-center">
                {props.children}
            </div>
            <NextButton href={props.next} />
        </div>
    )
}

