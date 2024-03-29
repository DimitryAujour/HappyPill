import React, { useEffect, useState } from 'react';
import '../App.css';
import styled from "styled-components";
const api_url = "https://type.fit/api/quotes";
const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: solid 5px lightblue;
  border-radius: 5px;
  text-align: center;
  transition: all 0.5s;
  background-color: transparent;

  
  @media (max-width: 500px) {
    width: 80%;
    padding: 1rem;
    font-size: 18px;
  }
`;



const PillMessage = () => {
    const [quotes, setQuotes] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function fetchQuotes() {
            try {
                const response = await fetch(api_url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setQuotes(data); // Save the entire array of quotes
            } catch (error) {
                console.error("There was an error fetching the quotes:", error);
            }
        }

        fetchQuotes();
    }, []);

    const nextQuote = () => {
        setIndex((prevIndex) => {
            // Use a callback to get the previous index and calculate the new one
            const nextIndex = (prevIndex + 1) % quotes.length; // This ensures we cycle back to the first quote after the last one
            return nextIndex;
        });
    };

    // Get the current quote based on the index
    const { text, author } = quotes[index] || { text: '', author: '' }; // Fallback to empty strings if no quote

    return (
        <>
        <div className={'PillMessage'}>
            {quotes.length > 0 ? (
                <div >
                    <p className={'text'} >"{text}"</p>
                    <p className={'author'}>-{author || 'Unknown'}</p> {/* Display 'Unknown' if author is not provided */}
                </div>

                ) : (
                <p>Loading quotes...</p>
            )}
            <StyledButton  onClick={nextQuote}>Next Quote</StyledButton>

        </div>
            </>
    );
};

export default PillMessage;
