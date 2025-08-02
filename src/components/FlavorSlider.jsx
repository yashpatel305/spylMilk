import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"

const FlavorSlider = () => {

    const sliderRef = useRef()

    const isTablet = useMediaQuery({
        query: "(max-width:1024px)",
    })

    useGSAP(() => {
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "-2% top",
                    end: `+=${scrollAmount + 1200}px`,
                    pin: true,
                    scrub: 1.5,
                    anticipatePin: 1,
                },
            });

            tl.to(".flavor-section", {
                x: `-${scrollAmount + 1200}px`,
                ease: "none",
            });
        }

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl.to(".first-text-split", {
            xPercent: -30,
            ease: "power1.inOut",
        }).to(".flavor-text-scroll", {
            xPercent: -22,
            ease: "power1.inOut",
        }, "<").to(".second-text-split", {
            xPercent: -10,
            ease: "power1.inOut",
        }, "<");

    }, {
        dependencies: [isTablet],
        revertOnUpdate: true,
    });


    // New: FlavorCard component for hover effect
    const FlavorCard = ({ flavor }) => {
        const cardRef = useRef(null)
        const [drinkStyle, setDrinkStyle] = useState({})
        const [elementStyle, setElementStyle] = useState({})
        const [cursor, setCursor] = useState({ nx: 0, ny: 0 });

        const handleMouseMove = (e) => {
            const rect = cardRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            // Normalize to -1..1
            const nx = (x / rect.width) * 2 - 1
            const ny = (y / rect.height) * 2 - 1
            setCursor({ nx, ny });

            setDrinkStyle({
                transform: `translateX(${nx * 20}px) translateY(${Math.min(ny * 10, 0)}px)`,
                transition: "transform 0.1s",
            })
            setElementStyle({
                transform: `translate(${-nx * 20}px, ${-ny * 20}px)`,
                transition: "transform 0.1s",
            })
        }

        const handleMouseLeave = () => {
            setCursor({ nx: 0, ny: 0 });
            setDrinkStyle({ transform: "translate(0,0)", transition: "transform 0.3s" })
            setElementStyle({ transform: "translate(0,0)", transition: "transform 0.3s" })
        }

        return (
            <div
                ref={cardRef}
                className={`relative z-30 lg:w-[50vw] w-96 lg:h-[600px] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={`/images/${flavor.color}-bg.svg`}
                    alt="bg-img"
                    className="absolute bottom-0 cursor-pointer"
                />
                <img
                    src={`/images/${flavor.color}-drink.webp`}
                    alt="drinks"
                    className="drinks absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
                    style={{
                        transform: `translateX(${cursor.nx * 20}px) translateY(${Math.min(cursor.ny * 10, 0)}px)`,
                        transition: "transform 0.1s",
                        ...drinkStyle,
                    }}
                />
                <img
                    src={`/images/${flavor.color}-elements.webp`}
                    alt="element"
                    className="elements cursor-pointer"
                    style={elementStyle}
                />
                <h1>{flavor.name}</h1>
            </div>
        )
    }

    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
                {
                    flavorlists.map((flavor) => (
                        <FlavorCard key={flavor.name} flavor={flavor} />
                    ))
                }
            </div>
        </div>
    )
}

export default FlavorSlider
