class ApiResponse {
  constructor(data, message, statusCode = 200) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.success = statusCode >= 200 && statusCode < 300;
  }
}

export default ApiResponse;
