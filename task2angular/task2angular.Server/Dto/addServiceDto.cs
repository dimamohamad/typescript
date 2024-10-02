namespace task2angular.Server.Dto
{
    public class addServiceDto
    {
        
        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

    }
}
