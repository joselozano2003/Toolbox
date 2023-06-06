'use client';

import { numbers, specialCharacters, words} from '@/constants'
import style from '@/styles/Password.module.css'
import React, { useState , useEffect, use} from 'react';
import crypto from 'crypto';

interface RadioOption {
    value: string;
    name: string;
}


export function PasswordGenerator() {
    const options = [numbers, specialCharacters, words]

    const [selectedOption, setSelectedOption] = useState<string>('HTML');
    const [selected, setSelected] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        setSelected(true);
    };

    function getRandomItem<T>(array: T[]): T | undefined {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    
    function toTitleCase(str: any): any {
        return str.replace(/\b\w/g, (match: string) => match.toUpperCase());
    }

    function generateRandomHash(): string {
        const randomBytes = crypto.randomBytes(8); // Generate 8 random bytes
        const hash = randomBytes.toString('hex'); // Convert bytes to hexadecimal string
        return hash;
    }

    const generate = () => {
        if (selectedOption === 'Low') {
            const password = `${toTitleCase(getRandomItem(words))}${getRandomItem(words)?.toLowerCase()}${getRandomItem(numbers)?.toLowerCase()}${getRandomItem(numbers)?.toLowerCase()}${getRandomItem(specialCharacters)?.toLowerCase()}`|| '';
            setPassword(password);
        }
        else if (selectedOption === 'Medium') {
            let password = `${toTitleCase(getRandomItem(words))}`
            for (let i = 0; i < 3; i++) {
                const option = options[Math.floor(Math.random() * 3)];
                password += `${getRandomItem(option)?.toLowerCase()}${getRandomItem(option)?.toLowerCase()}${getRandomItem(option)?.toLowerCase()}-`
            }
            password += `${getRandomItem(specialCharacters)?.toLowerCase()}`
            setPassword(password);
        }
        else if (selectedOption === 'High') {
            const password = `${generateRandomHash()}${generateRandomHash()}`;
            setPassword(password);
        }
    }
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };
    
    useEffect(() => {
        console.log(selected);
    }, [selectedOption]); 

    const radioOptions: RadioOption[] = [
        { value: 'Low', name: 'Low' },
        { value: 'Medium', name: 'Medium' },
        { value: 'High', name: 'High' },
    ];

    return (
        <div className={style.parent}>
            <div className={style.radioInputs}>
                {radioOptions.map((option) => (
                    <label className={style.radio} key={option.value}>
                    <input
                        type="radio"
                        name="radio"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={handleOptionChange}
                    />
                    <span className={style.name}>{option.name}</span>
                    </label>
                ))}
            </div>
            {selected && <button className={style.button} onClick={generate}>Generate Password</button>}
            {password && (
                <div className={style.end}>
                    <div className={style.textbox}>
                        <div className={style.chatBubble}>
                            <div className={style.chatBubbleContent}>{password}</div>
                        </div>
                    </div>
                    <button className={style.button} onClick={copyToClipboard}>Copy</button>
                </div>
                
            )}
        </div>
    );
};