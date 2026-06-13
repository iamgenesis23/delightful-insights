import './Hero.css'

export default function Hero(props) {
    const page = props.pageTitle;

    return(
        <>
            <section id={`${page}Hero`} className="hero style">
                <p>Hello World!</p>
            </section>
        </>
    )
}