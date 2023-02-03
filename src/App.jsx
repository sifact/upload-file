import "./App.css";
import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";

import { storage } from "./firebase/firebase.config";
import { v4 } from "uuid";

function App() {
    const [fileUpload, setFileUpload] = useState(null);
    const [fileUrls, setFileUrls] = useState([]);

    const fileListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (fileUpload == null) return;
        const fileRef = ref(storage, `images/${fileUpload.name + v4()}`);
        uploadBytes(fileRef, fileUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setFileUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(fileListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFileUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <section className="App">
            <div>
                <input
                    type="file"
                    onChange={(event) => {
                        setFileUpload(event.target.files[0]);
                    }}
                />
                <button onClick={uploadFile}> Upload File</button>
                {fileUrls.map((url) => {
                    return (
                        <>
                            <a target="_blank" download="" href={url}>
                                File
                            </a>
                        </>
                    );
                })}
            </div>
        </section>
    );
}

export default App;
