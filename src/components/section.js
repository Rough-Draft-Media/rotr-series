import Image from 'next/image'

export default function Section(props) {

    return(
        <div className="relative bg-black">
                {props.children}
        </div>
    )
}