import { ProfiDoc } from "./profi-doc";
import photo1 from "../../assets/img/photo1.svg";
import photo2 from "../../assets/img/photo2.svg";
import css from "./documents.module.css";
import { useEffect, useState } from "react";
import { apiProvider } from "../../api-provider/api-provider";
import { ScanDoc } from "./scan-doc";

export function Documents() {
    const [scanDocs, setScanDocs] = useState<ScanDoc[] | null>();

    useEffect(() => {
        apiProvider.documents
            .root(["1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="])
            .then((data) => {
                setScanDocs(data);
            });
    }, []);

    return (
        <div>
            <div className={css.cards}>
                {scanDocs?.map((scanDoc) => {
                    return (
                        <ProfiDoc
                            date={new Date(scanDoc.ok.issueDate)}
                            text={scanDoc.ok.content.markup}
                            source={scanDoc.ok.source.name}
                            title={scanDoc.ok.title.text}
                            badge={"Технические новости"}
                            img={photo1}
                            wordsCount={scanDoc.ok.attributes.wordCount + ""}
                        />
                    );
                })}
            </div>
        </div>
    );
}
