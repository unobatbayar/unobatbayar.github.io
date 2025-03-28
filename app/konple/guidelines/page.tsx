// pages/guidelines.tsx

import React from 'react';

const GuidelinesPage = () => {
    return (
        <div>
            <h4>Thank you for using <span style={{ fontWeight: 'bold' }}>Konple</span>.</h4>
            <p>Chat with the world.</p>

            <div>
                <h4 style={{ fontWeight: 'bold' }}>Guidelines</h4>
                <ul>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Be Respectful:</span> Treat all users with kindness and respect. Harassment, bullying, or any form of offensive behavior will not be tolerated.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>No Profanity:</span> Please refrain from using inappropriate language, including profanity or offensive slurs. Keep the chat environment friendly for everyone.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Stay On-Topic:</span> Keep conversations relevant to the purpose of the chat room. Avoid spamming or irrelevant discussions.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Protect Privacy:</span> Do not share personal information, either your own or others', in the chat. Respect everyone's privacy.
                    </li>
                    <li>
                        <span style={{ fontWeight: 'bold' }}>Report Violations:</span> If you encounter inappropriate behavior or content, please report it to the moderators immediately. We aim to maintain a safe and welcoming space for all users.
                    </li>
                </ul>

                <footer>
                    <p style={{ fontStyle: 'italic', color: '#666' }}>
                        By using this chat room, you agree to follow these guidelines and help create a positive community.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default GuidelinesPage;
