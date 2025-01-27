using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotBot2.Models
{
    public class CardPaymentDetail
    {
        [Key]
        public int PaymentID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string HolderName { get; set; } = "";

        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; } = "";

        [Column(TypeName = "nvarchar(3)")]
        public string SecurityCode {  get; set; } = "";

        [Column(TypeName = "nvarchar(5)")]
        public string ExperationDate { get; set; } = "";

    }
}
