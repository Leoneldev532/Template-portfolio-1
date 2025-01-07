import { StaticImageData } from "next/image";

export type WorksAccordionType = {
    title: string,
    description: string,
    numerotation: string;
}

export type workSaleCardType = {
    title: string,
    subTitle: string,
    price: string,
    link: string,
    id?: number
    image: StaticImageData,
}

export type PortfolioCardType = {
    title: string,
    image: StaticImageData,
    link: string
}