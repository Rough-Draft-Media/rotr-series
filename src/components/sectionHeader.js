export default function SectionHeader(props) {

    return(
        <div className="sticky flex flex-row container mx-auto h-16 top-8 z-20 items-center">
            <div className="w-full h-0.5 bg-zinc-100/30"></div>
            <h1 className="font-header font-bold uppercase tracking-widest text-zinc-100/60 text-2xl px-4">
                {props.children}
            </h1>
            <div className="w-full h-0.5 bg-zinc-100/30"></div>
        </div>
    )
}