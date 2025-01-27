using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotBot2.Models
{
    public class CardPaymentDetail
    {
        [Key]
        public int PaymentID { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string HolderName { get; set; } = "";

        [Column(TypeName = "varchar(16)")]
        public string CardNumber { get; set; } = "";

        [Column(TypeName = "varchar(3)")]
        public string SecurityCode {  get; set; } = "";

        [Column(TypeName = "varchar(5)")]
        public string ExperationDate { get; set; } = "";

    }
}
