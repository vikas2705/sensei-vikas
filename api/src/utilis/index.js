export const textToSpeech = async (inputText) => {
    const options = {
        method: 'POST',
        url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
        headers: {
            accept: 'audio/mpeg',
            'content-type': 'application/json',
            'xi-api-key': `${API_KEY}`,
        },
        data: {
            text: inputText,
        },
        responseType: 'arraybuffer',
    };

    const speechDetails = await axios.request(options);
    return speechDetails.data;
};