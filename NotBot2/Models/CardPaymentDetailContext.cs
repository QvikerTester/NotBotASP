using Microsoft.EntityFrameworkCore;

namespace NotBot2.Models
{
    public class CardPaymentDetailContext:DbContext
    {
        public CardPaymentDetailContext(DbContextOptions options) : base(options) { 

        }

        public DbSet<CardPaymentDetail> CardPaymentDetails { get; set; }

    }
}
