namespace task2angular.Server.Dto
{
    public class updateServiceDto
    {


        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

    }
}
