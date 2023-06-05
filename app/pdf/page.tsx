import { PdfMerger } from "./pdfMerger"

export const metadata = {
    title: 'PDF Generator',
    description: 'Home page',
};

export default async function PDF() {
    return(
        <div>
            <h1 className="title">PDF Generator</h1>
            <PdfMerger />
        </div>
    )
}