import Settings from './Settings';

const ENDPOINT = 'http://api.ocr.space/parse/image';

const OcrApi = {
  getOcrResults: function (image) {
    const photo = {
      uri: image,
      name: 'image.jpg',
      type: 'image/jpeg',
    };
    const data = new FormData();
    data.append('apikey', Settings.ocrApiKey);
    data.append('file', photo);
    data.append('language', 'eng');
    const config = {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    return fetch(ENDPOINT, config);
  },
};

export default OcrApi;
