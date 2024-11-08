const request = require('supertest');
const app = require('./app');

describe('API Routes', () => {
    it('should return 200 OK for / route', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(201);
    });

    it('should return JSON response for / route', async () => {
        const res = await request(app).get('/');
        expect(res.body).toEqual({ message: 'Hello Worl!' })
    });
});