const request = require("supertest");

const server = require("./server");


describe("GET /", function() {
    it("should return status code 200", function() {
    
        return request(server)
        .get("/")
        .then(response => {
        expect(response.status).toBe(200);
        });
    });

    it("should return a JSON", function() {
    return request(server)
        .get("/")
        .then(res => {
        expect(res.type).toMatch(/json/i);
        });
    });

    it("should return {api: 'working'}", function() {
    return request(server)
        .get("/")
        .then(res => {
        expect(res.body.api).toBe("working");
        });
    });
});

// describe('POST /', () => {

// it('should create a new user', () => {
//     return request(server)
//         .post('/')
//         .then((res) => {
//             const { success, message } = res.body;
//             expect(success).toBeTruthy();
//             expect(message).toBe('Uploaded successfully');
//         })
//         .catch(err => console.log(err));
//     });
// })

describe('DELETE/user/:id ', () => {

it('should delete existing user successfully', () => {
    return request(server)
    .delete(`/user/:id`)
    .then((res) => {
    const { success, message, error } = res.body;
    expect(success).toBeTruthy();
    expect(message).toBe('Delete successfully');
    expect(error).toBe('Could not find user');
    })
    .catch(err => console.log(err));
    });
})

