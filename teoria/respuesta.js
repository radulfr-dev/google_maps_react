class ServiceController {
  static getPrice(service) {

    const multimediaContent = service.getMultimediaContent();

    switch (typeof service) {

      case StreamingService:
        return multimediaContent.streamingPrice;

      case DownloadService:
        return multimediaContent.downloadPrice;

      default:
        break;
    }
  }

  static getAdditionalFee(service){
      if(typeof service.getMultimediaContent() == PremiumContent) return service.getMultimediaContent().additionalFee;
      return 0;
  }
}

class RegisteredUser {
  constructor(services) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach(service, (index) => {
      total += ServiceController.getPrice(service);
      total += ServiceController.getAdditionalFee(service);
    });

    return total;
  }
}
