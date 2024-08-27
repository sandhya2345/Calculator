import React, { useState } from 'react';

function Calculator() {
            // using hooks
    const [input1, setInput1] = useState('');
    const [result1, setResult1] = useState('0');
    const [input2, setInput2] = useState('');
    const [result2, setResult2] = useState('0');

    const handleButtonClick1 = (value) => {
            // botton logic
        if (value === 'CE') {
            setInput1('');
            setResult1('0');
        } else if (value === '=') {
            try {
                setResult1(eval(input1).toString());
            } catch (error) {
                setResult1('Error!');
            }
        } else {
            setInput1(input1 + value);
        }
    };

    const handleButtonClick2 = (value) => {

        if (value === 'CE') {
            setInput2('');
            setResult2('0');
        } else if (value === '=') {
            try {
                setResult2(eval(input2).toString());
            } catch (error) {
                setResult2('Error!');
            }
        } else {
            setInput2(input2 + value);
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
            {/* background design */}
            <div className='absolute inset-0 w-full h-full bg-[#c4f1f9] clip-left'></div>
            <div className="absolute inset-0 w-full h-full bg-[#2C2F3F] clip-right"></div>

            {/* calculator part */}
            <div className="relative z-10 flex space-x-8">
                <div className="bg-[#2C2F3F] p-4 pt-16  shadow-lg w-[320px]">
                    <div className="flex justify-between text-4xl font-bold mb-4">
                        <div className="text-[#5AD1E1] ">=</div>
                        <div className="text-white">{result1}</div>
                    </div>
                    <hr className="border-t border-gray-700 my-2" />

                    <div className='text-right text-[#fafdfd] text-2xl font-bold mb-4'>{input1}</div>

                    <div className="grid grid-cols-4 gap-2">
                        {/* rendering array using map function */}
                        {['CE', '+/-', '%', '/'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick1(value)}
                                // conditional rendering
                                className={`${value === '/' ? 'bg-[#5AD1E1] text-white' : 'bg-[#5AD1E1] text-white'
                                    } text-2xl p-4 rounded-lg`}
                            >
                                {value}
                            </button>
                        ))}

                        {[7, 8, 9, '*'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick1(value.toString())}
                                className={`${value === '*' ? 'bg-[#5AD1E1] text-white' : 'bg-[#2C2F3F] text-white'
                                    } text-2xl p-4 rounded-lg border border-gray-700`}
                            >
                                {value}
                            </button>
                        ))}


                        {[4, 5, 6, '-'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick1(value.toString())}
                                className={`${value === '-' ? 'bg-[#5AD1E1] text-white' : 'bg-[#2C2F3F] text-white'
                                    } text-2xl p-4 rounded-lg border border-gray-700`}
                            >
                                {value}
                            </button>
                        ))}


                        {[1, 2, 3, '+'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick1(value.toString())}
                                className={`${value === '+' ? 'bg-[#5AD1E1] text-white row-span-2' : 'bg-[#2C2F3F] text-white'}
                                text-2xl p-2 rounded-lg border border-gray-700`}
                            >
                                {value}
                            </button>
                        ))}


                        <button
                            onClick={() => handleButtonClick1('0')}
                            className="col-span-1 bg-[#2C2F3F] text-white text-2xl p-4 rounded-lg border  border-gray-700"
                        >
                            0
                        </button>

                        <button
                            onClick={() => handleButtonClick1('.')}
                            className="bg-[#2C2F3F] text-white text-2xl p-4 rounded-lg border border-gray-700"
                        >
                            .
                        </button>
                        <button
                            onClick={() => handleButtonClick1('=')}
                            className="bg-[#5AD1E1] text-white text-2xl p-4 rounded-lg"
                        >
                            =
                        </button>
                    </div>
                </div>

                {/* Light mode calculator starts here!!!!!!!! */}
                <div className="bg-white p-4 pt-16  shadow-lg w-[320px]">
                    <div className="flex justify-between text-4xl font-bold mb-2">
                        <div className="text-[#5AD1E1]">=</div>
                        <div className="text-[#2C2F3F]">{result2}</div>
                    </div>

                    <hr className="border-t border-gray-100 my-2" />

                    <div className="text-right text-[#2C2F3F] text-2xl font-bold mb-4">{input2}</div>

                    <div className="grid grid-cols-4 gap-2">
                        {['CE', '+/-', '%', '/'].map((value) => (
                            <button
                                key={value}
                                //callback function 
                                onClick={() => handleButtonClick2(value)}
                                className={`${value === '/' ? 'bg-[#5AD1E1] text-white' : 'bg-[#5AD1E1] text-white'
                                    } text-2xl p-4 rounded-lg`}
                            >
                                {value}
                            </button>
                        ))}


                        {[7, 8, 9, '*'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick2(value.toString())}
                                className={`${value === '*' ? 'bg-[#5AD1E1] text-white' : 'bg-[#f5f5f5] text-[#2C2F3F]'
                                    } text-2xl p-4 rounded-lg border`}
                            >
                                {value}
                            </button>
                        ))}


                        {[4, 5, 6, '-'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick2(value.toString())}
                                className={`${value === '-' ? 'bg-[#5AD1E1] text-white' : 'bg-[#f5f5f5] text-[#2C2F3F]'
                                    } text-2xl p-4 rounded-lg border`}
                            >
                                {value}
                            </button>
                        ))}


                        {[1, 2, 3, '+'].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleButtonClick2(value.toString())}
                                className={`${value === '+' ? 'bg-[#5AD1E1] text-white row-span-2' : 'bg-[#f5f5f5] text-[#2C2F3F]'
                                    } text-2xl p-2 rounded-lg border`}
                            >
                                {value}
                            </button>
                        ))}


                        <button
                            onClick={() => handleButtonClick2('0')}
                            className="col-span-1 bg-[#f5f5f5] text-[#2C2F3F] text-2xl p-4 rounded-lg border"
                        >
                            0
                        </button>
                        <button
                            onClick={() => handleButtonClick2('.')}
                            className="bg-[#f5f5f5] text-[#2C2F3F] text-2xl p-4 rounded-lg border"
                        >
                            .
                        </button>
                        <button
                            onClick={() => handleButtonClick2('=')}
                            className="bg-[#5AD1E1] text-[#f5f5f5] text-2xl p-4 rounded-lg"
                        >
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
