import Link from 'next/link'

export default function NextButton(props) {

    return(

        <div className="absolute bottom-8 w-full flex flex-row justify-center text-zinc-100/80 hover:text-zinc-100">
            {(props.href === "") ? (null) : (<Link href={props.href}>
                <i className="bx bx-chevrons-down bx-lg hover:scale-110 hover:translate-y-1 transition ease-in-out"></i>
            </Link>)}
        </div>
    )

}