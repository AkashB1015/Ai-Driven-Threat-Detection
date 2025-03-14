import React from "react";
import "./page.css";

const Pricing = () => {
    return (

        <section id="last_q" className="last_q">
            <div className="feq_question">
                <div className="container1">
                    <h2>FAQs</h2>
                    <div className="faq">
                        <details>
                            <summary>What is Syscure, and how does it work? </summary>
                            <p>Syscure is an advanced security system that helps detect viruses in files and securely manage passwords. It scans files for potential threats using intelligent detection algorithms and encrypts your passwords to keep them safe from cyber threats.</p>
                        </details>
                        <details>
                            <summary>How does Syscure ensure my passwords are secure?</summary>
                            <p>Syscure uses end-to-end encryption to store and manage your passwords. This means your passwords are encrypted before storage, ensuring that even if someone gains access to the system, they cannot read your credentials.
                            </p>
                        </details>
                        <details>
                            <summary>Can Syscure detect all types of viruses and malware?</summary>
                            <p>Syscure is equipped with advanced scanning technology that detects known and emerging threats, including viruses, malware, and spyware. However, staying updated with the latest security patches and practicing safe browsing is also recommended.
                            </p>
                        </details>
                        <details>
                            <summary>Syscure available on multiple devices?</summary>
                            <p>Yes, Syscure is designed to work across multiple devices, including PCs, so you can access secure password management and virus detection anywhere.
                            </p>
                        </details>
                        <details>
                            <summary>Does Syscure require an internet connection to function? </summary>
                            <p>Syscure can perform offline virus scans and password storage. However, an internet connection is required for cloud synchronization, real-time threat updates, and automatic security enhancements.</p>
                        </details>
                      
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Pricing;
